function (teamName, gamesPlayed, numberofWins, runsScored, runsAllowed){
    var numberofLosses = gamesPlayed - numberofWins
    var winPct = (numberofWins / gamesPlayed).toFixed(3)
    var scoredAvg =  (runsScored / gamesPlayed).toFixed(2)
    var allowedAvg = (runsAllowed / gamesPlayed).toFixed(2)
    var scoredAllowedAvg = (scoredAvg - allowedAvg).toFixed(2)
    var runsSAdiff = (runsScored - runsAllowed)
    var rasRatio = (runsAllowed / runsScored).toFixed(2)
    var rasExp = Math.pow(rasRatio,1.83)
    var pygNum = 1 / (1 + rasExp)
    var pygExpec = (pygNum * gamesPlayed).toFixed(2)
    var pygExpecDiff = (pygExpec - numberofWins).toFixed(2)
      /*  console.log("The " + teamName + " have played " + gamesPlayed + " games.");
    console.log("")
    console.log("They have won " +numberofWins + " and lost " + numberofLosses + " games for a win pct of " + winPct + "" )
    console.log("")
    console.log("They have scored " + runsScored + " runs and allowed " + runsAllowed + " for a differential of " + runsSAdiff + " total runs.");
    console.log("");
    console.log("They have scored on average " + scoredAvg + " runs while allowing " + allowedAvg + " for a differential of " + scoredAllowedAvg + " runs per game.")
    console.log("")
    console.log("Their PYG Expectation for wins is " + pygExpec + " games.")
        console.log("")
    console.log("The PYG Expectation minus actual wins difference is " + pygExpecDiff + " games.") 
    */
}

var teamName = "test"

var elem = $('p').html(The " + teamName )
    $('body').append(elem)
    
var teamObject = {
    teams: [
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
teamObject.teams.forEach(function(d){
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
var teamTemplate = $("#team-template").html()
//2. complie template
var compileTemp = Handlebars.compile(teamTemplate)
//3. add objs
var addObjs = compileTemp(teamObject)
//4. append 
var hbList = $('#handlebars-list').append(addObjs)
