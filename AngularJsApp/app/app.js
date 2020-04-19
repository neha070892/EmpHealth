var app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
    $scope.path = "images/image.png";
    $scope.logo = "images/myemp.JPG";
    $scope.team1 = "images/team1.jpg";
    $scope.team2 = "images/team2.jpg";
    $scope.active = false;
    $scope.active1 = false;
    $scope.active2 = false;
    $scope.active3 = false;
    $scope.active4 = false;
    $scope.active5 = false;
});