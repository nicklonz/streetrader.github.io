	function TodoCtrl($scope) {
 
    $scope.total = function(){
        return $scope.one * $scope.two;
    };
}

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
		$scope.games_played = '162';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an About page.';
	});

	scotchApp.controller('dataController', function($scope) {
		$scope.message = 'Welcome to the Data page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Visit nicklonz.com to see more development work.';
	});