$(document).ready(function () {
  var apiKey = 'd5f81af7e565653bdaca9a5f863d08a0';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

  $.get(weatherUrl + 'New York City')
    .fail(function (xhr) {
      console.log(xhr);
    })
    .done(function (response) {
        console.log(response);

        var temp = response.main.temp;
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;

        $('#nyc-weather')
            .append('<p>Temperature: ' + temp + '</p>')
            .append('<p>Humidity: ' + humidity + '</p>')
            .append('<p>Wind Speed: ' + windSpeed + '</p>')

    })
   
    $('#weather-form').submit(function (event) {
        event.preventDefault();

        // get user input
        var city = $('#city').val();
        var state = $('#state').val();

        $.ajax({
            url: weatherUrl + city + ',' + state,
            type: 'GET',
            success: function (response) {
                // pipe AJAX reponse to outside function for cleaner code
                outputWeather(response);
            },
            error: function (xhr) {
                console.log(xhr);
            }
        });
    })

    function outputWeather (response) {
        console.log(response);

        var city = response.name;
        var temp = response.main.temp;
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;

        $('#weather-output')
            .empty() // be sure to clear out any data from previous searches!
            .append('<p>City: ' + city + '</p>')
            .append('<p>Temperature: ' + temp + '</p>')
            .append('<p>Humidity: ' + humidity + '</p>')
            .append('<p>Wind Speed: ' + windSpeed + '</p>')
    }

/* MLB Pythagorean Expectation

Enter Team Name
Enter Games Played
Enter Number of Wins
Enter Runs Scored
Enter Runs Against
Calulate Expectation
Calulate PYG Ratio and wins vs actual

var teamName = prompt("Enter MLB Team Name: ");
var gamesPlayed = prompt("Enter the number of games played: ");
var numberofWins = prompt("Enter number of wins: ");
var runsScored = prompt("Enter the total number of runs scored: ");
var runsAllowed = prompt("Enter the total number of runs allowed: ");

    var team = $('select#team').val(); 

    console.log('The team choosen is ',team)
    */

    var numberofLosses = gamesPlayed - numberofWins
    var winPct
     = (numberofWins / gamesPlayed).toFixed(3)
    var scoredAvg =  (runsScored / gamesPlayed).toFixed(2)
    var allowedAvg = (runsAllowed / gamesPlayed).toFixed(2)
    var scoredAllowedAvg = (scoredAvg - allowedAvg).toFixed(2)
    var runsSAdiff = (runsScored - runsAllowed)
    var rasRatio = (runsAllowed / runsScored).toFixed(2)
    var rasExp = Math.pow(rasRatio,1.83)
    var pygNum = 1 / (1 + rasExp)
    var pygExpec = (pygNum * gamesPlayed).toFixed(2)
    var pygExpecDiff = (pygExpec - numberofWins).toFixed(2)

    var nameOfTeam = $('input#team').val();
    $('span#name_team').text(nameOfTeam);
    var numberOfGames = $('input#games').val();
    $('span#num_games').text(numberOfGames);
    var numberOfWins = $('input#wins').val();
    $('span#num_wins').text(numberOfWins);
    var numberOfRunsScored = $('input#runs_scored').val();
    $('span#num_runs_scored').text(numberOfRunsScored);
     var numberOfRunsAgainst = $('input#runs_against').val();
    $('span#num_runs_against').text(numberOfRunsAgainst);

        // console.log("The " + teamName + " have played " + gamesPlayed + " games.");
        // console.log("")
        // console.log("They have won " +numberofWins + " and lost " + numberofLosses + " games for a win pct of " + winPct + "" )
        // console.log("")
        // console.log("They have scored " + runsScored + " runs and allowed " + runsAllowed + " for a differential of " + runsSAdiff + " total runs.");
        // console.log("");
        // console.log("They have scored on average " + scoredAvg + " runs while allowing " + allowedAvg + " for a differential of " + scoredAllowedAvg + " runs per game.")
        // console.log("")
        // console.log("Their PYG Expectation for wins is " + pygExpec + " games.")
        // console.log("")
        // console.log("The PYG Expectation minus actual wins difference is " + pygExpecDiff + " games.")


/*
var bottles = 200,bottle="bottles",text="";
window.onload=function() {
  $('button#btn').on('click', function(event){
    event.preventDefault();

    var bottles = $('input#bottles').val(); 
    var team = $('select#team').val(); 

    console.log('The team choosen is ',team)
    while (bottles > 0) {
      if (bottles==1) bottle="bottle"; 
      text = "<p>"+bottles+" "+bottle+" of beer on the wall, "+bottles+" "+bottle+" of beer.<br/>";
      bottles--; //this is the same as bottles = bottles - 1;
      if (bottles==0) bottles="no more"; 
      text += "Take one down and pass it around, "+bottles+" bottles of beer on the wall.</p>"
      count.innerHTML += text;
    }
    count.innerHTML += "<p>No more bottles of beer on the wall, no more bottles of beer.<br>Better go get some coffee!!!</p>"
  });

};
*/