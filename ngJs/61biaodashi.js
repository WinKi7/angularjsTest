/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 16-2-16
 * Time: 下午3:04
 * To change this template use File | Settings | File Templates.
 */
var myApp61=angular.module("myApp61", []);
myApp61.controller('MyController61',
    function ($scope, $parse) {
        $scope.$watch('expr', function (newVal, oldVal, scope) {
            console.log("new "+ newVal);
            console.log("old "+ oldVal);
            console.log(scope);
            if (newVal !== oldVal) {
// 用该表达式设置parseFun
                var parseFun = $parse(newVal);
                console.log(parseFun);
// 获取经过解析后表达式的值
                $scope.parsedValue = parseFun(scope);
            }
        });
    });
