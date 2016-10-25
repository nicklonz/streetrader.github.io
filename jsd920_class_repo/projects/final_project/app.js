var presidentObject = {
    presidents: [
                'Boston Red Sox', 
                'Arizona Diamondbacks',
                'Atlanta Braves',
                'Baltimore Orioles', 
                'Chicago Cubs',
                'Chicago White Sox', 
                'Cincinnati Reds',
                'Cleveland Indians',
                'Colorado Rockies',
                'Detroit Tigers',
                'Florida Marlins', 
                'Houston Astros',
                'Kansas City Royals',
                'Los Angeles Angels', 
                'Los Angeles Dodgers', 
                'Milwaukee Brewers',
                'Minnesota Twins',
                'New York Mets',
                'New York Yankees',
                'Oakland Athletics',
                'Philadelphia Phillies',
                'Pittsburgh Pirates',
                'San Diego Padres',
                'San Francisco Giants', 
                'Seattle Mariners',
                'St. Louis Cardinals',
                'Tampa Bay Rays',
                'Texas Rangers',
                'Toronto Blue Jays', 
                'Washington Nationals',
    ]
}


var list = $('#jquery-list')
presidentObject.presidents.forEach(function(d){
    var option = $("<option>").html(d)
    list.append(option)
})

var titleObj = {
    title: "A GA Final Project By NL",
    description:  ""
}

var hbTitle = $('#title-template').html()
var compileTitle = Handlebars.compile(hbTitle)
var addTitleObj = compileTitle(titleObj)
var hbTitleHtml = $('#hbtitle').append(addTitleObj)

//1. grab handblebars template
var presTemplate = $("#president-template").html()
//2. complie template
var compileTemp = Handlebars.compile(presTemplate)
//3. add objs
var addObjs = compileTemp(presidentObject)
//4. append 
var hbList = $('#handlebars-list').append(addObjs)
