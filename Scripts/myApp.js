var app = angular.module('myApp', ['ngRoute']); 

//including 
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    
    //Set home Route
        .when('/', {
            templateUrl : 'Components/home/home.html',
            controller : 'homeController'
        })
    
    //Set person route
        .when('/persons', {
            templateUrl : 'Components/personName/person.html',
            controller : 'personController'
        })

    //Set biz Directory  route
        .when('/bizDirectory', {
            templateUrl : 'Components/bizDirectory/bizDirectory.html',
            controller : 'bizDirectoryController'
        })
    
        .otherwise({ redirectTo: '/'});
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    
});