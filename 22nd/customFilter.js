var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.names=[
    'Santosh', 'Gaurav','Pavithra','Asha','Debi'
    ];
});

app.filter('myFormat', function(){
    return function(x){
        var i, c, txt="";
        for (var i = 0; i < x.length; i++) {
            c=x[i];
            if(i%2==0){
                c=c.toUpperCase();
            }
            txt+=c;
        }
        return txt;
    }
});
