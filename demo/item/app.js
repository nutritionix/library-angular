(function () {
    'use strict';

    var module = angular.module('demo', [
        'angular-loading-bar',
        'nix.api'
    ]);

    module.config(function (nixApiProvider, $locationProvider) {
        // change to your credentials
        nixApiProvider.setApiCredentials(null, null);
        nixApiProvider.setApiEndpoint('https://api0.nutritionix.com/v2');
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    });

    module.constant(
        'macronutrients',
        [208, 203, 204, 205, 207]
    );


    module.controller('MainCtrl', function ($scope, $filter, nixApi, $q, $location, macronutrients) {
        console.log($location.search());

        var promise;

        if ($location.search().id) {
            promise = nixApi.item($location.search().id)
                .then(function (response) {
                    return response.data;
                })
        }

        if (promise) {
            promise.then(function (item) {
                $scope.item = item;

                $scope.nutrients = {
                    macro: [],
                    micro: []
                };

                angular.forEach($scope.item.label.nutrients, function (nutrient) {
                    var index = macronutrients.indexOf(nutrient.attr_id);
                    if (index !== -1) {
                        $scope.nutrients.macro[index] = nutrient;
                    } else {
                        $scope.nutrients.micro.push(nutrient);
                    }
                });

                $scope.nutrients.macro = $filter('filter')($scope.nutrients.macro, function (element) {
                    return !!element;
                });

                $scope.nutrients.macro.showAll = $scope.nutrients.micro.showAll = false;

                $scope.nutrients.macro.less = $scope.nutrients.macro.slice(0, 3);
                $scope.nutrients.micro.less = $scope.nutrients.micro.slice(0, 3);
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    });
})();
