var app = angular.module("myApp", []);

app.run(function($rootScope){
    $rootScope.color = 'blue';
    $rootScope.bgColor = 'grey';
});

app.controller("myCtrl", function($scope){
$scope.color = "red";
});
