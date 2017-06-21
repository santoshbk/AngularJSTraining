angular.module("myApp", [])
.controller("myController", function($scope){
$scope.emp = [
    {name:'Guhar', job:'CEO in Chennai', sal:10},
    {name:'Pavithra', job:'COO in Chennai', sal:20000},
    {name:'Santosh', job:'UI Dev in Bangalore', sal:10000}
];

});