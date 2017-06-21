var app = angular.module("myApp", []);
app.controller("myController", function($scope){
$scope.fn = "Noname";
$scope.ln = "Never";
$scope.fl = function(){
    return $scope.fn+" "+$scope.ln;
}
});