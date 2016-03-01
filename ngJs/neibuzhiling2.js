/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 16-2-17
 * Time: 上午11:04
 * To change this template use File | Settings | File Templates.
 */
var myApp = angular.module("MyApp", []);
myApp.controller("parentBareController", function ($scope) {
    $scope.someBareValue = "Hello Computer";
    $scope.someBareAction = function () {
        $scope.someBareValue = "Hello Human,from parent";
    }
});
myApp.controller("childBareController", function ($scope) {
    $scope.childBareAction = function () {
        $scope.someBareValue = "Hello Human,from child";
    }
});
myApp.controller("parentController", function ($scope) {
    $scope.somemodel = {someValue: "Hello Computer2"};
    $scope.someAction = function () {
        $scope.somemodel.someValue = "Hello Human, from parent2";
    }
});
myApp.controller("childController", function ($scope) {
    $scope.childAction = function () {
        $scope.somemodel.someValue = "Hello Human,from child2";
    }
});
myApp.controller("EquationController", function ($scope) {
    $scope.equation = {};
    $scope.change = function () {
        $scope.equation.output = parseInt($scope.equation.x) + 2;
    }
});