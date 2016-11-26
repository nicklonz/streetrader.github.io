Feedr@GA Project

Overview

The web is an ever growing medium and it is getting more and more difficult to filter useful information. In our journey to writing beautiful JavaScript we have come and will come across a great many reference points that will guide our learning. This is where personal feeds come in very useful. Online feeds are like to-do lists in that they can be infinitely personalized and there is not one solution that works for everybody.

For our Unit 2 project we will build Feedr, a personalized feed reader. Our feed reader will pull feeds from our favorite blogs. The user will be able to filter between publications through the dropdown on the header menu. Clicking/tapping on one of the articles will load a pop up with more information. The user from that point will be able to either dismiss the additional information or go to the referenced article.

This will be our first single page app. All of our application views will be contained in the provided index.html file. Our task, after we pull from the respective feed APIs, will be to toggle the appropriate classes and content for the provided site architecture.

Technical Requirements

Your core application rules:

Feed sources:

Give the user the ability to pull from a multiple news sources. Here are some news sources we suggest:

Mashable: http://mashable.com/stories.json
Reddit: https://www.reddit.com/top.json
Digg: http://digg.com/api/news/popular.json
NPR One
Hearst publishing group (Cosmopolitan, Elle, Popular Mechanics, Road and Track, etc.)
You should also feel free to use other news APIs; however, you will find that many APIs that do not support either CORS or JSONp will result in a cross-domain restriction error ("No 'Access-Control-Allow-Origin' header is present...") in the browser. To get around this, you can use the following proxy server to filter your API requests.

Let's say you wanted to use the Digg API, which has the following endpoint:

http://digg.com/api/news/popular.json

If you preface the request with the proxy server API as follows...

https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json

...you should be able to use the Digg API without encountering a cross-domain restriction error. Here's a code example of how you might use the proxy server:

$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
  console.log(results);
  results.data.feed.forEach(function(result){
    $("ul").append("<li>"+result.content.title+"</li>")
  })
})
If you use your own feeds, they must have APIs with the following minimum requirements:

Each article must provide an image source for the circular thumbnail at the left of the article.
Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
Must provide a point, ranking, or some type of total impressions for the respective article.
Must provide either a full version or a summary of the article for the pop up screen.
Feed rules:

When the application first loads display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API hide the loader and replace the content of the #main container with that of the API. The DOM structure of each article must adhere to the .article structure.
When the user selects an article's title show the #popUp overlay. The content of the article must be inserted in the .container class inside #popUp. Make sure you remove the .loader class when toggling the article information in the pop-up.
Change the link of the "Read more from source" button to that of the respective article.
When the user selects a source from the dropdown menu on the header, replace the content of the page with articles from the newly selected source. Display the loading pop up when the user first selects the new source, and hide it on success.
Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.
Additional UI interaction rules:

When the user clicks/taps the search icon, expand the input box. Best approach for this is to toggle the .active class for the #search container. If the search input box is already expanded tapping the search icon again will close the input. Pressing the "Enter" key should also close the opened input box. See Bonus 2 for search filtering functionality.
When the app is first loading and when the user selects to load a new feed from the dropdown, display the #popUp container with the .loader class. You can toggle the .hidden class from the container to display/hide the overlay container.
Add functionality to hide the pop-up when user selects the "X" button on the pop-up.
Clicking/tapping the "Feedr" logo will display the main/default feed.
Bonus

Merge all feeds into one main feed in chronological order for the initial view. When the user clicks/taps the "Feedr" logo at the top, they should be return to this feed. This will be the new "home view."
Filter feed by title according to user keyboard input on the search input box. This should run the filter on every keystroke. When the input box is cleared, all articles should display in the respective feed.
Add infinite scrolling. Start displaying only the first 20 articles and keep loading more on user scrolling.
Necessary Deliverables

A working Feedr, built by you, that can be run locally
A new git repository hosted on Github, where your codebase is maintained.
Most of the your will be done on the app.js file. You may update the index.html and style.css files if you would like to further customize your app.
A 5-10 minute presentation including 3 technical hurdles, 2 new things you learned, Q&A.
Due Data_structures

Submit (via a url in Scoology) and demonstrate a working app in lesson #16 - 11th July.

Getting Started

Begin by creating a new repo on your github account. Clone this repo locally:

cd <your project parent folder>
git clone https://github.com/<your github name>/<your github repo>.git
cd <your project folder>
As you accomplish a feature, be sure to commit it in Git with the following commands:

git add .
git commit -m "A description of what was added"
git push -u origin master
Here are some suggestions on where to start:

Start by adding all the DOM functionality first.
Map out all of the needed fields/properties from each respective feed.
Start by doing a console.log of the incoming feeds to confirm you have a successful ajax call before you start mapping anything out.
Make sure you have the JSON View chrome extension to get a clean view of the JSON dump in your browser.
Think about ways to best standardize all of your incoming data.
Test small pieces of functionality frequently, to make sure everything is working.
Use tools such as Stack Overflow, Google and documentation resources to solve problems.
Useful Resources

Key Resources

MDN JavaScript data types and data structures
jQuery Event Basics
Understanding Event Delegation
jQuery Tutorial
A beginner's guide to HTTP and REST
Async JS Callbacks
SitePoint: Intro to jQuery Shorthand AJAX Methods
Project Feedback + Evaluation

Students will fork the "feedr" application and commit their code as they complete pieces of functionality.

The instructional team will grade each technical requirement and provide a numeric grade on a scale.

Technical Requirements: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?
Creativity: Did you added a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a hello world response)?
Code Quality: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?
Total: Your instructors will give you a total score on your project between:
Score Expectations
0 Does not meet expectations.
1 Meets expectations, good job!
2 Exceeds expectations, you wonderful creature, you!
This will serve as a helpful overall gauge of whether you met the project goals, but the more important scores are the individual ones above, which can help you identify where to focus your efforts for the next project!

## Project Overview

This is a breakdown of the top level functionality for building the Feedr application.

* Our reader will pull feeds from various API's such as Mashable, Reddit & Digg

* The user will be able to filter the feeds via a dropdown

* The user will be able to filter the current feeds using search terms

* Clicking an article will render a modal with additional article info

## Helper Functions
Use this section to document all helper functions. These functions should be versatile enough to be reused in other projects

## Additional Libraries

## JSON Data Keys

## jQuery Functional Requirements

## Change Log

## Issues and Resolutions

This section will contain a list of all issues encountered and their resolution

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object





