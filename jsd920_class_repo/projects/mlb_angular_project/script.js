
	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the data page
			.when('/data', {
				templateUrl : 'pages/data.html',
				controller  : 'dataController'
			})

			// route for the weather page
			.when('/weather', {
				templateUrl : 'pages/weather.html',
				controller  : 'weatherController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Thank You for visiting!';
		/*
		1. add remaining variables to the $scope.data object
		2. add the result text with the variables bound
		3. create function to calculate the formula
		4. bind the formula result
		 */
		$scope.data = {
			team: 'New York Mets',
			games_played: 162,
      games_won: 87,
			runs_scored: 671,
			runs_against: 617,
			games_lost: '',
			winPct: '',
			scoredAvg: '',
			allowedAvg: '',
			scoredAllowedAvg: '',
			runsSAdiff: '',
			rasRatio: '',
			rasExp: '',
			pygNum: '',
			pygExpec: '',
			pygExpecDiff: '',
		};

		$scope.doCalculation = function(){
			$scope.data.games_lost = $scope.data.games_played - $scope.data.games_won;
			$scope.data.winPct = ($scope.data.games_won / $scope.data.games_played).toFixed(3);
			$scope.data.scoredAvg = ($scope.data.runs_scored / $scope.data.games_played).toFixed(2);
			$scope.data.allowedAvg = ($scope.data.runs_against / $scope.data.games_played).toFixed(2);
			$scope.data.runsSAdiff = $scope.data.runs_scored - $scope.data.runs_against;
			$scope.data.scoredAllowedAvg = ($scope.data.scoredAvg - $scope.data.allowedAvg).toFixed(2);
			$scope.data.rasRatio = ($scope.data.runs_against / $scope.data.runs_scored).toFixed(2);
			$scope.data.rasExp = Math.pow($scope.data.rasRatio,1.83);
			$scope.data.pygNum = 1 / (1 + $scope.data.rasExp);
 			$scope.data.pygExpec = ($scope.data.pygNum * $scope.data.games_played).toFixed(2);
 			$scope.data.pygExpecDiff = ($scope.data.pygExpec - $scope.data.games_won).toFixed(2);

		};
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an About page.';
	});

	scotchApp.controller('dataController', function($scope) {
		$scope.message = 'Welcome to the Data page.';
	});

	scotchApp.controller('weatherController', function($scope) {
		$scope.message = 'Welcome to the Weather page.';
		  // var apiKey = 'd5f81af7e565653bdaca9a5f863d08a0'

		  // // var apiKey = 
		  // var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

		 
		  // $.get(weatherUrl + 'New York City')
		  //   .fail(function (xhr) {
		  //     console.log(xhr);
		  //   })
		  //   .done(function (response) {
		  //     console.log(response);

		  //     var temp = response.main.temp;
		  //     var humidity = response.main.humidity;
		  //     var windSpeed = response.wind.speed;

		  //   $('#nyc-weather')
		  //     .append('<p>Temperature: ' + temp + '</p>')
		  //     .append('<p>Humidity: ' + humidity + '</p>')
		  //     .append('<p>Wind Speed: ' + windSpeed + '</p>')

		  //   });
		    
		  //   $('#weather-form').submit(function (event) {
		  //     event.preventDefault();

		  //     // get user input
		  //     var city = $('#city').val();
		  //     var state = $('#state').val();

		  //     $.ajax({
		  //       url: weatherUrl + city + ',' + state,
		  //       type: 'GET',
		  //       success: function (response) {
		  //         // pipe AJAX reponse to outside function for cleaner code
		  //         outputWeather(response);
		  //       },
		  //       error: function (xhr) {
		  //         console.log(xhr);
		  //       }
		  //     });
		  //   })

		  //   function outputWeather (response) {
		  //     console.log(response);

		  //     var city = response.name;
		  //     var temp = response.main.temp;
		  //     var humidity = response.main.humidity;
		  //     var windSpeed = response.wind.speed;

		  //     // change background color
		  //     colorBackground(temp);

		  //     $('#weather-output')
		  //       .empty() // be sure to clear out any data from previous searches!
		  //       .append('<p>City: ' + city + '</p>')
		  //       .append('<p>Temperature: ' + temp + '</p>')
		  //       .append('<p>Humidity: ' + humidity + '</p>')
		  //       .append('<p>Wind Speed: ' + windSpeed + '</p>')

		  //   function colorBackground (temp) {
		  //     if (temp > 75) {
		  //       $('body').css('background', 'red');
		  //     } else {
		  //       $('body').css('background', 'blue');
		  //     }
		  //   }
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Visit nicklonz.com to see more development work.';
	});