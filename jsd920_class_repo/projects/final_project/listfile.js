var teams = new Array();
   teams["BOS"] = "Boston Red Sox";
   teams["NYY"] = "New York Yankees"; 
   teams["ARI"] = "Arizona Diamondbacks"; 
   teams["ATL"] = "Atlanta Braves"; 
   teams["BAL"] = "Baltimore Orioles"; 
   teams["CHC"] = "Chicago Cubs"; 
   teams["CHW"] = "Chicago White Sox"; 
   teams["CIN"] = "Cincinnati Reds"; 
   teams["CLE"] = "Cleveland Indians"; 
   teams["COL"] = "Colorado Rockies"; 
   teams["DET"] = "Detroit Tigers"; 
   teams["FLA"] = "Florida Marlins"; 
   teams["HOU"] = "Houston Astros"; 
   teams["KCR"] = "Kansas City Royals"; 
   teams["LAA"] = "Los Angeles Angels"; 
   teams["LAD"] = "Los Angeles Dodgers"; 
   teams["MIL"] = "Milwaukee Brewers"; 
   teams["MIN"] = "Minnesota Twins"; 
   teams["NYM"] = "New York Mets"; 
   teams["OAK"] = "Oakland Athletics"; 
   teams["PHI"] = "Philadelphia Phillies"; 
   teams["PIT"] = "Pittsburgh Pirates"; 
   teams["SDP"] = "San Diego Padres"; 
   teams["SFG"] = "San Francisco Giants"; 
   teams["SEA"] = "Seattle Mariners"; 
   teams["STL"] = "St. Louis Cardinals"; 
   teams["TBR"] = "Tampa Bay Rays"; 
   teams["TEX"] = "Texas Rangers"; 
   teams["TOR"] = "Toronto Blue Jays"; 
   teams["WSN"] = "Washington Nationals";
    
   
function getName(code) {
       return teams[code];
}


var teamShort = new Array();
   teamShort["BOS"] = "Red Sox";
   teamShort["NYY"] = "Yankees"; 
   teamShort["ARI"] = "Diamondbacks"; 
   teamShort["ATL"] = "Braves"; 
   teamShort["BAL"] = "Orioles"; 
   teamShort["CHC"] = "Cubs"; 
   teamShort["CHW"] = "White Sox"; 
   teamShort["CIN"] = "Reds"; 
   teamShort["CLE"] = "Indians"; 
   teamShort["COL"] = "Rockies"; 
   teamShort["DET"] = "Tigers"; 
   teamShort["FLA"] = "Marlins"; 
   teamShort["HOU"] = "Astros"; 
   teamShort["KCR"] = "Royals"; 
   teamShort["LAA"] = "Angels"; 
   teamShort["LAD"] = "Dodgers"; 
   teamShort["MIL"] = "Brewers"; 
   teamShort["MIN"] = "Twins"; 
   teamShort["NYM"] = "Mets"; 
   teamShort["OAK"] = "Athletics"; 
   teamShort["PHI"] = "Phillies"; 
   teamShort["PIT"] = "Pirates"; 
   teamShort["SDP"] = "Padres"; 
   teamShort["SFG"] = "Giants"; 
   teamShort["SEA"] = "Mariners"; 
   teamShort["STL"] = "Cardinals"; 
   teamShort["TBR"] = "Rays"; 
   teamShort["TEX"] = "Rangers"; 
   teamShort["TOR"] = "Blue Jays"; 
   teamShort["WSN"] = "Nationals";
    
function getShortName(code) {
       return teamShort[code];
}
 //  getName("NYY"); will return New York Yankees, 
 // and getShortName("NYY") will return Yankees


var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
}

//step1: grab the handlebars html template

//step2: compile the template using Handlebars.compile()

//step3: pass compile the obj

//step4: append the obj(s) to the html element


