(function (window, angular, undefined) {
    'use strict';
    var module = angular.module('nix.api', []);

    module.deepMerge = function deepMerge(a, b) {
        var result, property;

        if (arguments.length > 2) {
            return deepMerge(a, deepMerge.apply(null, Array.prototype.slice.call(arguments, 1)));
        }

        result = angular.copy(a);
        for (property in b) if (b.hasOwnProperty(property)) {
            if (
                result.hasOwnProperty(property) &&
                angular.isObject(result[property]) &&
                angular.isObject(b[property])
                ) {
                result[property] = deepMerge(result[property], b[property]);
            } else {
                result[property] = angular.copy(b[property]);
            }
        }

        return result;
    };


    module.provider('nixApi', function nixApiProvider() {
        var apiEndpoint = 'https://api.nutritionix.com/v2/',
            credentials = {},
            httpConfig = {};


        this.setApiEndpoint = function (endpoint) {
            apiEndpoint = endpoint;
        };

        this.setApiCredentials = function (appId, appKey) {
            credentials.appId = appId;
            credentials.appKey = appKey;
        };

        this.setHttpConfig = function (value) {
            if (angular.isObject(value)) {
                httpConfig = value;
            }
        };

        this.$get = function nixApiFactory($http) {

            var nixApi = function (endpoint, config) {
                config = module.deepMerge(
                    {
                        method:            'GET',
                        url:               'https://api.nutritionix.com/v2' + endpoint,
                        headers:           {
                            'X-APP-ID':  credentials.appId,
                            'X-APP-KEY': credentials.appKey
                        },
                        params:            {}
                    },
                    httpConfig,
                    config
                );

                return $http(config);
            };

            return nixApi;
        };
    });

    module.filter('nutrient', function () {
        return function (nutrients, id, attribute) {
            var i;
            id = parseInt(id);
            if (id && angular.isArray(nutrients)) {
                for (i in nutrients) if (nutrients.hasOwnProperty(i)) {
                    if (parseInt(nutrients[i].attr_id) === id) {
                        return attribute ? nutrients[i][attribute] : nutrients[i];
                    }
                }
            }

            return null;
        };
    });
})(window, window.angular);
