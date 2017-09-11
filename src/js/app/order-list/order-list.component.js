'use strict';

angular.module('orderList').component('orderList', {
    templateUrl: './template/order-list.html',
    controller: function ($scope, Store) {
        var itemKeySave = '';
        var orderList = [
            {
                title: 'order 1',
                description: 'order 1 description'
            },
            {
                title: 'order 2',
                description: 'order 2 description'
            },
            {

                title: 'order 3',
                description: 'order 3 description'
            }

        ];

        $scope.orderList = orderList;


        $scope.selectOrder = function(singleOrder, index){
            // alert('updated order index = '+index);
            itemKeySave = index;

            Store.set(singleOrder);
            $scope.$parent.onChangeStore();

            // console.log(Store.get());
        }

        $scope.$on('updateOrder', function(event, args){

            // alert('index = '+itemKeySave+" title = "+args.title);
            // $scope.orderList.push({''})
            $scope.orderList[itemKeySave].title = args.title;
            $scope.orderList[itemKeySave].description = args.description;
        });

        $scope.$on('addOrder', function(event, args){

            // alert('index = '+itemKeySave+" title = "+args.title);
            // $scope.orderList.push({''})
            $scope.orderList.push(args);
        });

        $scope.orderDeleted = function(index){
            $scope.orderList.splice(index, 1);
        };
    }
});