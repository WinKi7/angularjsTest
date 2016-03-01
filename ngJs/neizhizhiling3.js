/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 16-2-17
 * Time: 下午4:28
 * To change this template use File | Settings | File Templates.
 */
var myApp = angular.module("MyApp", []);
myApp.controller("FormController", function ($scope) {
    $scope.fields = [
        {placeholder: 'Username', isRequired: true},
        {placeholder: 'Password', isRequired: true},
        {placeholder: 'Email (optional)', isRequired: false}
    ];
    $scope.submitForm = function () {
        alert("It works!");
    }
});
myApp.controller("CityController", function ($scope) {
    $scope.citys = [{name: 'Seattle'},
        {name: 'San Francisco'},
        {name: 'Chicago'},
        {name: 'New York'},
        {name: 'Boston'}];
});
myApp.controller("CityController2", function ($scope) {
    $scope.mycity = "Chicago";
    $scope.citys = [{name: 'Seattle', value: 'a'},
        {name: 'San Francisco', value: 'b'},
        {name: 'Chicago', value: 'c'},
        {name: 'New York', value: 'd'},
        {name: '高角度上', value: 'e'}];
});
myApp.controller("FormController2", function ($scope) {
    $scope.person = {name: null};
    $scope.people = [];
    $scope.submit = function () {
        if ($scope.person.name) {
            $scope.people.push({name: $scope.person.name});
            $scope.person.name = '';
        }
    }
});
myApp.controller("LotteryController", function ($scope) {
    $scope.generateNumber = function () {
        return Math.floor((Math.random() * 10) + 1);
    };
});
myApp.directive('someDirective', function () {
    return {
        restrict: 'A',
        replace: true,
        template: '<h3>some stuff here</h3>'
    };
});
myApp.controller("ScopeController", function ($scope) {
    //J1 这里我们在作用域里初始化两个变量
    $scope.name = "dreamapple";
    $scope.age = 20;
    //J2 创建一个方法，修改我们创建的对象的年龄
    $scope.changeAge = function () {
        $scope.age = 22;
    }
});
//J3 创建我们的指令，指令名字为"myDirective"
myApp.directive("myDirective", function () {
    var obj = {
        //J4   指令的声明模式为 "AE" 属性和元素
        restrict: "AE",
        //J5   指令继承父作用域的属性和方法
       // scope: false,
        scope:true,
        replace: true,
        template: "<div class='my-directive'>" +
        "<h3>" + "下面部分是我们创建的指令生成的" + "</h3>" +
        "我的名字是："+"<span ng-bind='name'></span><br/>" +
        "我的年龄是："+"<span ng-bind='age'></span>" +
        "<input type='text' ng-model='name'>" +
        " </div>"
    };
    return obj;
});


