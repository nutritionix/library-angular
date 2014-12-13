(function () {
    'use strict';

    var module = angular.module('demo', [
        'angular-loading-bar',
        'jsonFormatter',
        'hljs',
        'nix.api'
    ]);

    module.config(function (nixApiProvider) {
        // change to your credentials
        nixApiProvider.setApiCredentials(null, null);
        nixApiProvider.setApiEndpoint('https://api0.nutritionix.com/v2');
    });

    module.controller('MainCtrl', function ($scope, nixApi) {
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
            .success(function (search) {
                $scope.search = search;
            });

        nixApi.brand_search('mcdon', [1, 3])
            .success(function (brandSearch) {
                $scope.brandSearch = brandSearch;
            });

        nixApi.item('8GkO3')
            .success(function (item) {
                $scope.item = item;
            });

        nixApi.item('0kGURkwz')
            .success(function (item) {
                $scope.itemByResource = item;
            });

        nixApi.brand('B1J9')
            .success(function (brand) {
                $scope.brand = brand;
            });
    });
})();
