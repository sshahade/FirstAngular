var app = angular.module('myApp', ['ngRoute']); 

//including 
app.config(function ($routeProvider) {
    $routeProvider
    
    //Set home Route
        .when('/', {
            templateURL : 'Components/home/home.html',
            controller : 'homeController'
        })
    
    //Set person route
        .when('/persons', {
            templateURL : 'Components/personName/person.html',
            controller : 'personController'
        })

    //Set biz Directory  route
        .when('/bizDirectory', {
            templateURL : 'Components/bizDirectory/bizDirectory.html',
            controller : 'bizDirectoryController'
        });
    
        .otherwise( { redirectTo: '/'} );
    
    // use the HTML5 History API
		// $locationProvider.html5Mode(true);
    
});