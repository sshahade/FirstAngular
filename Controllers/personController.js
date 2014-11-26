app.controller("personController", function ($scope, $http) {
    $scope.firstname = "Samwise";
    $scope.lastname = "Gamjee";
    $scope.quantity = 5;
    $scope.ticketprice = 15;
    $scope.myDataShowStatus = "true";
    $scope.myShowBtnStatus = "true";
    $scope.myHideBtnStatus = "true";
    
    $scope.toggle = function () {
        $scope.myDataShowStatus = !$scope.myDataShowStatus;
        $scope.myHideBtnStatus = !$scope.myHideBtnStatus;
        $scope.myShowBtnStatus = !$scope.myShowBtnStatus;
    };


    var site = "http://www.w3schools.com";
    var page = "/website/Customers_JSON.php";
    
    $http.get(site + page)
        .success(function (response) {$scope.names = response; });
});