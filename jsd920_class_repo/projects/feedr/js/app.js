/*
  Please add all Javascript code to this file.
*/


// Set up Handlebars templates
var template1 = $('#article-template').html();
var articleTemplate = Handlebars.compile(template1);

var template2 = $('#link-template').html();
var linkTemplate = Handlebars.compile(template2);


// Set up app object
var Feedr = {
  // Mashable Object
  Mashable: {
    // create array to fill with articles
    articles: []
  },
  // Reddit Object
  Reddit: {
    // create array to fill with articles
    articles: []
  },
  // Digg Object
  Digg: {
    // create array to fill with articles
    articles: []
  },

  // create a function to handle the json response
  responseMashable : function(response) {
      // console log json response
      console.log(response);
      // 
      var self = this;

      response.new.forEach(function(result){

        // push an object with all required article details for each article
        self.Mashable.articles.push({
          featuredImage: result.responsive_images[0].image,
          articleLink: result.link,
          articleTitle: result.title,
          articleCategory: result.channel,
          impressions: result.shares.total,
          description: result.content.plain,
          dateTime: Utilities.convertDate(result.post_date)
        });

        // populate template with article content
        var articleContents = { sourceName: "mashable",
                                dateTime: Utilities.convertDate(result.post_date),
                                featuredImage: result.responsive_images[0].image,
                                articleLink: result.link,
                                articleTitle: result.title,
                                articleCategory: result.channel,
                                impressions: result.shares.total
        };

        // complile and append template
        var compiledTemplate = articleTemplate(articleContents);
        $("#main").append(compiledTemplate)

      })
  },

  // create a function to handle the json response
  responseReddit : function(response) {
      // console log json response
      console.log(response);
      // 
      var self = this;

      response.data.children.forEach(function(result){

        // push an object with all required article details for each article
        self.Reddit.articles.push({
          featuredImage: result.data.thumbnail,
          articleLink: "http://www.reddit.com" + result.data.permalink,
          articleTitle: result.data.title,
          articleCategory: result.data.subreddit,
          impressions: result.data.ups,
          description: "Reddit doesn't provide body text. Click the button and check out the media",
          // multiply by 1000 to adjust to milliseconds
        dateTime: Utilities.convertDate(result.data.created_utc * 1000)
        });

        // populate template with article content
        var articleContents = { sourceName: "reddit",
                                dateTime: Utilities.convertDate(result.data.created_utc * 1000),
                                featuredImage: result.data.thumbnail,
                                articleLink: "http://www.reddit.com" + result.data.permalink,
                                articleTitle: result.data.title,
                                articleCategory: result.data.subreddit,
                                impressions: result.data.ups
        };

        // complile and append template
        var compiledTemplate = articleTemplate(articleContents);
        $("#main").append(compiledTemplate)

      })
  },

  // create a function to handle the json response
  responseDigg : function(response) {
      // cponsole log json response
      console.log(response);
      // 
      var self = this;

      response.data.feed.forEach(function(result){

        // push an object with all required article details for each article
        self.Digg.articles.push({
          featuredImage: result.content.media.images[0].url,
          articleLink: result.content.url,
          articleTitle: result.content.title,
          articleCategory: result.content.tags[0].display,
          impressions: result.digg_score,
          description: result.content.description,
          // multiply by 1000 to adjust to milliseconds
          dateTime: Utilities.convertDate(result.date_published * 1000)
        });

        // populate template with article content
        var articleContents = { sourceName: "digg",
                                dateTime: Utilities.convertDate(result.date_published * 1000),
                                featuredImage: result.content.media.images[0].url,
                                articleLink: result.content.url,
                                articleTitle: result.content.title,
                                articleCategory: result.content.tags[0].display,
                                impressions: result.digg_score
        };

        // complile and append template
        var compiledTemplate = articleTemplate(articleContents);
        $("#main").append(compiledTemplate)

      })
  },

  // Displays only the articles from the source chosen
  filterArticles : function(source) {
    $('#' + source).on("click", function(){
      $('.article').not('.' + source).hide();
      $('.' + source).show();
      $('#current-source').html(source);
    })
  },

  // Displays all articles when Feedr logo is clicked
  showAllArticles : function() {
    $('#feedr').on('click', function(){
      $('.article').show();
      $('#current-source').html('All');
    })
  },

  // Replaces Reddit's missing images.
  swapDudImages : function() {
    var r = "../images/redditlogo.png";
    $('img[src=""]').attr("src", r);
    $('img[src="default"]').attr("src", r);
    $('img[src="self"]').attr("src", r);
    $('img[src="nsfw"]').attr("src", r);
  },

  // get sources
  // heroku proxy required for CORS issue. Jquery proxy required to reset context from window to Feedr.
  getSourceMashable : function() {
    $.get('https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json', $.proxy(Feedr.responseMashable, Feedr))
        .done(function(){ console.log( "loaded Mashable"); })
        .fail(function() { alert( "error, failed to load Mashable" ); });
  },

  getSourceReddit : function() {
    $.get('https://www.reddit.com/top.json', $.proxy(Feedr.responseReddit, Feedr))
        .done(function(){ console.log( "loaded Reddit"); })
        .fail(function() { alert( "error, failed to load Reddit" ); });
  },

  getSourceDigg : function() {
    $.get('https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json', $.proxy(Feedr.responseDigg, Feedr))
        .done(function(){ console.log( "loaded Digg"); })
        .fail(function() { alert( "error, failed to load Digg" ); });
  },

  openPopUp : function(title, source) {
    $("#popUp").removeClass("hidden loader");
    var contents = Feedr.findByProperty(title, source);
    // populate tamplate with article content
    var linkContents = {  articleLink: contents[1],
                          articleTitle: title,
                          articleDescription: contents[0]
    };

    // complile and append template
    var compiledLinkTemplate = linkTemplate(linkContents);
    $("#popUp").append(compiledLinkTemplate)

  },

  closePopUp : function() {
    $("#popUp").addClass("hidden loader");
    $("#popUp > .container").remove();
  },

  findByProperty : function(title, source) {
    switch (source) {
      case 'mashable':
        for(var i = 0 ; i < Feedr.Mashable.articles.length; i++){
          if(Feedr.Mashable.articles[i].hasOwnProperty("articleTitle") && Feedr.Mashable.articles[i].articleTitle === title) {
            return [Feedr.Mashable.articles[i].description, Feedr.Mashable.articles[i].articleLink];
          }
        }
        break;
      case 'reddit':
        for(var i = 0 ; i < Feedr.Reddit.articles.length; i++){
          if(Feedr.Reddit.articles[i].hasOwnProperty("articleTitle") && Feedr.Reddit.articles[i].articleTitle === title) {
            return [Feedr.Reddit.articles[i].description, Feedr.Reddit.articles[i].articleLink];
          }
        }
        break;
      case 'digg':
        for(var i = 0 ; i < Feedr.Digg.articles.length; i++){
          if(Feedr.Digg.articles[i].hasOwnProperty("articleTitle") && Feedr.Digg.articles[i].articleTitle === title) {
            return [Feedr.Digg.articles[i].description, Feedr.Digg.articles[i].articleLink];
          }
        }
        break;
      default:
        console.log("no match");
    }
  }
};

// General purpose utilities
var Utilities = {
  // Converts date/time to ISO
  // Return a Date object as a String, using the ISO standard
  convertDate : function (dateTime) {
    var x = new Date(dateTime);
    var d = x.toISOString();
    return d;
  },

};


// ready DOM
$(function() {

  // Whenever an ajax call is made, while it is being made this will fire up the loader.
  $(document).on({

    // while ajax is going...
    ajaxStart: function() {
       // Displays popUp while ajax is loading
       $("#popUp").removeClass("hidden");
       $(".closePopUp").hide();
    },

    // while ajax isn't going...
     ajaxStop: function() {
       // Hides popUp once ajax has loaded
       $("#popUp").addClass("hidden");
       $(".closePopUp").show();
       // Sorts articles chronologically
       $(".article").sort(function(a,b){
         return new Date($(a).attr("data-date")) - new Date($(b).attr("data-date"));
       }).each(function(){
         $("#main").prepend(this);
       })

       // Replace Reddits dud or missing images
       Feedr.swapDudImages();

       // Set up article filters
       Feedr.filterArticles("mashable");
       Feedr.filterArticles("reddit");
       Feedr.filterArticles("digg");
       Feedr.showAllArticles();

       // Trigger pop up on articles
       $('article h3').on('click', function(){
            var title = this.innerHTML;
            var source = this.getAttribute("class");
            Feedr.openPopUp(title, source);
          });
       $('.closePopUp').on('click', Feedr.closePopUp);
     }
   });

  // get json feeds from Mashable, Reddit and Digg. Display Mashable as default
  Feedr.getSourceMashable();
  // .one, rather than .on ensures it only runs once.
  $('#reddit').one('click', Feedr.getSourceReddit);
  $('#digg').one('click', Feedr.getSourceDigg);

  // Toggle search field on click
  $('#search-button').on('click', function(){
    $('#search').toggleClass('active');
  });

  // Toggle search click on <enter>
  $(document).keypress(function(e) {
    if(e.which == 13) {
      $('#search').toggleClass('active');
    }
  });

  // captures query on each character
  $('input').on('input', function(){
    var query = ($('input').val());

    // Sorts articles based on search query
    $(".article").sort(function(a,b){

      var x = $( a ).text().indexOf( query ) > -1;
      var y = $( b ).text().indexOf( query ) > -1;
      return x < y ? -1 : x > y ? 1 : 0;

    }).each(function(){
      $("#main").prepend(this);
    })
  });

});


