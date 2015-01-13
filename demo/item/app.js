(function () {
    'use strict';

    var module = angular.module('demo', [
        'angular-loading-bar',
        'jsonFormatter',
        'nix.api'
    ]);

    module.config(function (nixApiProvider, $locationProvider) {
        // change to your credentials
        nixApiProvider.setApiCredentials('db67f640', '6d3a917f26933266438f8c90c4fb061f');
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    });

    module.controller('MainCtrl', function ($scope, $filter, nixApi, $q, $location) {
        var promise;

        if ($location.search().id) {
            promise = nixApi.item($location.search().id)
                .then(function (response) {
                    return response.data;
                })
        } else if ($location.search().q) {
            promise = nixApi.natural($location.search().q)
                .then(function (response) {
                    return response.data.results.length && response.data.results[0];
                })
                .then($filter('naturalToItem'));
        }

        if (promise) {
            promise.then(function (item) {
                var macromutrients = {};
                if (item) {
                    $scope.item = item;

                    $scope.nutrients = {
                        macro: [],
                        micro: []
                    };

                    angular.forEach(nixApi.macronutrients, function(id){
                        macromutrients[id] = null;
                    });

                    angular.forEach($scope.item.label.nutrients, function (nutrient) {
                        var index = nixApi.macronutrients.indexOf(parseInt(nutrient.attr_id));
                        if (index !== -1) {
                            macromutrients[index] = nutrient;
                        } else {
                            $scope.nutrients.micro.push(nutrient);
                        }
                    });

                    angular.forEach(macromutrients, function(nutrient){
                        $scope.nutrients.macro.push(nutrient);
                    });

                    $scope.nutrients.macro = $filter('filter')($scope.nutrients.macro, function (element) {
                        return !!element;
                    });

                    $scope.nutrients.macro.showAll = $scope.nutrients.micro.showAll = false;

                    $scope.nutrients.macro.less = $scope.nutrients.macro.slice(0, 3);
                    $scope.nutrients.micro.less = $scope.nutrients.micro.slice(0, 3);
                }

            })
                .catch(function (error) {
                    $scope.error = error;
                    console.log(error);
                });
        }
    });
})();
