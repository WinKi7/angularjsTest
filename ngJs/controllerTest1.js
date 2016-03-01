/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 16-2-15
 * Time: 下午4:14
 * To change this template use File | Settings | File Templates.
 */
//function MyController($scope, $timeout) {
//    var updateClock = function () {
//        $scope.clock = new Date();
//        $timeout(function () {
//            updateClock();
//        }, 1000);
//    };
//    updateClock();
//}

function MyController($scope) {
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
}
