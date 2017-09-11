'use strict';

angular.module('orders', [
    'orderList'
]).factory('Store', function() {
    // hold a local copy of the state, setting its defaults

    const state = {
        data: {
            id: '',
            title: '',
            description: ''
        }
    };
// expose basic getter and setter methods
    return {
        get() {
            return state.data;
        },
        set(data) {
            Object.assign(state.data, data);

        }
    }
}).controller('mainController', function($scope, Store){
    var data = Store.get();
    $scope.title = data.title;
    $scope.description = data.description;

    $scope.onChangeStore = function(){
        var data = Store.get();

        $scope.title = data.title;
        $scope.description = data.description;
    }

    $scope.clearFields = function(){
        $scope.title = '';
        $scope.description = '';
    }
    $scope.onUpdated = function(){
        $scope.$broadcast('updateOrder', {'title': $scope.title, 'description': $scope.description});
        $scope.clearFields();
    }
    $scope.onAdd = function(){
        $scope.$broadcast('addOrder', {'title': $scope.title, 'description': $scope.description});
        $scope.clearFields();
    }

});