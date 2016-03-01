/**
 * Created by Administrator on 2016/3/1.
 */
var items = [{
    id : '1',
    name : '����',
    price : 30.00
},{
    id : '2',
    name : '�ƶ���',
    price : 15.8
},
    {
        id : '3',
        name : '����˪',
        price : 15.00
    },
    {
        id : '4',
        name : '���±�',
        price : 29.9
    },
    {
        id : '5',
        name : '���',
        price : 39.9
    },{
        id : '6',
        name : '����ͷ',
        price : 8.8
    }];
//���ﳵ�е�����;
var boughtList = {};
var common ={
    getTotal:function(){
        var total = 0;
        for(var k in boughtList){
            if(boughtList[k]){
                if(boughtList[k].num<=0){
                    boughtList[k].num=0;
                }
                total+=boughtList[k].num*boughtList[k].price;
            }
        }
        return total;
    }
};
angular.module("myApp",[]);
myApp.controller("ShowItemController",function($scope){
    $scope.items=items;
    $scope.boughtList=boughtList;
    $scope.total=0;
    for(var k in boughtList){
        if(boughtList[k]){
            $scope.total+=boughtList[k].num*boughtList[k].price;
        }
    }
    $scope.buyAction = function($event){
        var el = $event.target;
        var id = el.getAttribute('item-id');
        if(boughtList[id]){
            boughtList[id].num+=1;
        }else{
            var arr =[];
            arr.name = el.getAttribute('name');
            arr.price =el.getAttribute('price');
        }
    }
});
