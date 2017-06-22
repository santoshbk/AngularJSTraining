angular.module("myApp", [])
    .controller("myCtrl", function ($scope) {
        $scope.names = [
            {name: 'Guhar', country: 'Pak'},
            {name: 'Pavithra', country: 'US'},
            {name: 'Santosh', country: 'Canada'},
            {name: 'Sandy', country: 'UK'},
            {name: 'Joe', country:'Sweden'},
            {name:'Mary', country: 'Norway'}
        ];
        $scope.orderByMe = function (x) {
            $scope.myOrderBy = x;
        }

    });