angular.module('myFilterModule', []).filter('ordinal', function () {
	return function(input){
		var num;
		if(isNaN(input)){
			return input;
		}
		num=input%10;
		if(num===1){
			num=input+'st';
		} else if(num===2){
			num=input+'nd';
		} else if(num===3){
			num=input+'rd';
		}else {
			num=input+'th';
		}
		return num;
	}
});

angular.module('myApp', ['myFilterModule'])
.controller('myCtrl', function($scope){
	$scope.salaryList=[29853,584653,546845, 123121, 13122, 3242343, 65464];

});