(function () {
    'use strict';

    var module = angular.module('demo', [
        'angular-loading-bar',
        'jsonFormatter',
        'nix.api'
    ]);

    module.config(function (nixApiProvider) {
        // change to your credentials
        nixApiProvider.setApiCredentials(null, null);
        nixApiProvider.setApiEndpoint('https://api0.nutritionix.com/v2');
    });


    module.controller('MainCtrl', function ($scope, $filter, nixApi, $q) {
        nixApi.autocomplete('apple')
            .success(function (suggestions) {
                $scope.autocomplete = suggestions;
            });

        nixApi.natural(
            [
                '1 tbsp sugar',
                '16 fl oz water',
                '1/2 lemon',
            ].join('\n')
        )
            .success(function (natural) {
                $scope.natural = natural;
            });

        nixApi.search('Greek Yogurt')
            .then(function (response) {
                $scope.search = response.data;
            });

        nixApi.brand_search('mcdon', [1,3])
            .then(function (response) {
                $scope.brandSearch = response.data;
            });

        nixApi.item('8GkO3').then(function (response) {
            $scope.item = response.data;
        });

        nixApi.item('0kGURkwz').then(function (response) {
            $scope.itemByResource = response.data;
        });

        nixApi.brand('B1J9').then(function (response) {
            $scope.brand = response.data;
        })
    });
})();
