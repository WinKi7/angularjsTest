/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 16-2-16
 * Time: 上午9:38
 * To change this template use File | Settings | File Templates.
 */
var myApp = angular.module("myApp", []);
myApp.controller("myController1", function ($scope) {
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date();
    };
    var SetClock = function () {
        $scope.$apply(updateClock);
        //updateClock();
        setTimeout(SetClock, 1000);
    };

    // updateClock();
    setTimeout(SetClock, 1000);
});
myApp.controller("myController2", function ($scope) {
    $scope.name = "Ari";
});
myApp.controller("clickController", function ($scope) {
    $scope.counter = 0;
    $scope.add = function (amount) {
        $scope.counter += amount;
    };
    $scope.subtract = function (amount) {
        $scope.counter -= amount;
    }
});
