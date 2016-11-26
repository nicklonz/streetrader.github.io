
	// create the module and name it mlbApp
	var mlbApp = angular.module('mlbApp', ['ngRoute']);

	// configure our routes
	mlbApp.config(function($routeProvider) {
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

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	mlbApp.controller('mainController', function($scope) {
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

	mlbAppApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an About page.';
	});

	mlbApp.controller('dataController', function($scope) {
		$scope.message = 'Welcome to the Data page.';
	});


	mlbApp.controller('contactController', function($scope) {
		$scope.message = 'Visit nicklonz.com to see more development work.';
	});