(function () {
    'use strict';

    var module = angular.module('demo', [
        'angular-loading-bar',
        'nix.api'
    ]);

    module.config(function (nixApiProvider) {
        // change to your credentials
        nixApiProvider.setApiCredentials(null, null);
        nixApiProvider.setApiEndpoint('https://api0.nutritionix.com/v2');
    });


    module.controller('MainCtrl', function ($scope, $filter, nixApi, $q) {
        nixApi.search.standard('Greek Yogurt')
            .then(function (response) {
                if (response.data.results && response.data.results.length) {
                    return response.data.results[0].resource_id;
                }

                return $q.reject('Item not found');
            })
            .then(function (resource_id) {
                return nixApi.item(resource_id);
            })
            .then(function (response) {
                $scope.item = response.data;

                $scope.nutrients = {
                    macro: [],
                    micro: []
                };

                angular.forEach($scope.item.label.nutrients, function (nutrient) {
                    if (nutrient.attr_id.toString()[0] === '2') {
                        $scope.nutrients.macro.push(nutrient);
                    } else {
                        $scope.nutrients.micro.push(nutrient);
                    }
                });

                $scope.nutrients.macro.showAll = $scope.nutrients.micro.showAll = false;

                $scope.nutrients.macro.less = $scope.nutrients.macro.slice(0, 3);
                $scope.nutrients.micro.less = $scope.nutrients.micro.slice(0, 3);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
})();
