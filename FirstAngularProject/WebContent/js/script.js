var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope, $http) {
	$http.get("./data/mydata.json").then(function successcb(response) {
		$scope.persons=response.data;
	},function errorcb(error) {
		console.log(error.data);
	});

});


