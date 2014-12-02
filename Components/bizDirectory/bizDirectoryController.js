app.controller("bizDirectoryController", function ($scope, $http) {
    
    var site = "http://www.w3schools.com";
    var page = "/website/Customers_JSON.php";
    
    $http.get(site + page)
        .success(function (response) {$scope.names = response; });

});