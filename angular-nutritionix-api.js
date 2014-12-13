/**
 * @license Angular Nutritionix Api
 * (c) 2014 Nutritionix, LLC. http://nutritinix.com
 * License: MIT
 */

(function (window, angular, undefined) {
    'use strict';

    /**
     * @ngdoc overview
     * @name index
     *
     * @description
     * Angularjs client library to make calls to
     * <a href="https://developer.nutritionix.com/docs/v2">nutritionix API</a>
     *
     */

    /**
     * @ngdoc overview
     * @name nix.api
     *
     * @description
     * Angular module containing all library functionaluty
     *
     * @type {ng.IModule}
     */
    var module = angular.module('nix.api', []);

    /**
     * @ngdoc function
     * @name nix.api.functions:deepMerge
     * @function
     * @param {object} a First object
     * @param {object} b Second object
     *
     * @description
     *
     * Deep merge for any number of objects as arguments
     *
     * Accessible as direct method of the module object <pre>angular.module('nix.api').deepMerge(a, b);</pre>
     *
     * @returns {object} Resulting object
     */
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


    /**
     * @ngdoc service
     * @name  nix.api.provider:nixApiProvider
     *
     * @description
     *
     * Used for configuring {@link nix.api.service:nixApi} service
     */
    module.provider('nixApi', function nixApiProvider() {
        var apiEndpoint = 'https://api.nutritionix.com/v2',
            credentials = {},
            httpConfig = {},
            setApiCredentials;


        /**
         * @ngdoc method
         * @methodOf nix.api.provider:nixApiProvider
         * @name nix.api:nixApiProvider#setEndpoint
         * @param {string} endpoint Allows to change nutritionix api base endpoint.
         *                          Defaults to https://api.nutritionix.com/v2
         */
        this.setApiEndpoint = function (endpoint) {
            apiEndpoint = endpoint;
        };

        /**
         * @ngdoc method
         * @methodOf nix.api.provider:nixApiProvider
         * @name nix.api.provider:nixApiProvider#setApiCredentials
         * @param {string} appId Application id
         * @param {string} appKey Application Key
         *
         * @description Set api credentials generated at https://developer.nutritionix.com portal
         */
        setApiCredentials = this.setApiCredentials = function (appId, appKey) {
            credentials.appId = appId;
            credentials.appKey = appKey;
        };

        /**
         * @ngdoc method
         * @methodOf nix.api.provider:nixApiProvider
         * @name nix.api.provider:nixApiProvider#setHttpConfig
         * @param {object} value configuration object compatible with
         *                       https://docs.angularjs.org/api/ng/service/$http#usage
         *
         * @description
         * Set service-wide override for http calls configuration object
         * {@link https://docs.angularjs.org/api/ng/service/$http#usage}
         */
        this.setHttpConfig = function (value) {
            if (angular.isObject(value)) {
                httpConfig = value;
            }
        };


        this.$get = function nixApiFactory($http) {

            /**
             * @ngdoc service
             * @name  nix.api.service:nixApi
             * @function
             *
             * @description
             * Used to make calls to nutritionix api.
             * Low level function to build api client on top of.
             * All service methods are wrappers around service-function calls.
             *
             * @param {string} endpoint Relative api endpoint url e.g. '/estimated-nutrition/bulk'
             * @param {object} config Call-specific override for http calls configuration object
             *                        https://docs.angularjs.org/api/ng/service/$http#usage
             *                        The last override in chain of default object and
             *                        {@link nix.api.provider:nixApiProvider#methods_sethttpconfig} to form final http call config.
             *
             *                        Default object is built like that:
             *                        <pre>
             *                        {
             *                            method:  'GET',
             *                            url:     apiEndpoint + endpoint,
             *                            headers: {
             *                                'X-APP-ID':  credentials.appId,
             *                                'X-APP-KEY': credentials.appKey
             *                            },
             *                            params:  {}
             *                        }
             *                        </pre>
             */
            var nixApi = function (endpoint, config) {
                config = module.deepMerge(
                    {
                        method:  'GET',
                        url:     apiEndpoint + endpoint,
                        headers: {
                            'X-APP-ID':  credentials.appId,
                            'X-APP-KEY': credentials.appKey
                        },
                        params:  {}
                    },
                    httpConfig,
                    config
                );

                return $http(config);
            };

            /**
             * @ngdoc method
             * @methodOf nix.api.service:nixApi
             * @name nix.api.service:nixApi#setApiCredentials
             * @param {string} appId Application id
             * @param {string} appKey Application Key
             *
             * @description
             * Set api credentials generated at https://developer.nutritionix.com portal
             */
            nixApi.setApiCredentials = setApiCredentials;

            /**
             * @ngdoc property
             * @propertyOf nix.api.service:nixApi
             * @name nix.api.service:nixApi#macronutrients
             * @type {number[]}
             *
             * @description
             * List of ids of nutrients considered as  Macronutrients
             *
             * - **208** calories
             * - **204** fat
             * - **606** satfat
             * - **205** totalcarb
             * - **291** fiber
             * - **269** sugar
             * - **203** protein
             */
            nixApi.macronutrients = [208, 204, 606, 205, 291, 269, 203];


            /**
             * @ngdoc method
             * @methodOf nix.api.service:nixApi
             * @name nix.api.service:nixApi#autocomplete
             *
             * @param {string} q A search phrase prefix in plain text
             *
             * @description
             * The V2 autocomplete API aims to allow users the convenience of "as you type" suggestions.
             *
             * {@link https://developer.nutritionix.com/docs/v2/autocomplete}
             */
            nixApi.autocomplete = function (q) {
                var params = angular.isObject(q) ? q : {q: q};

                return nixApi('/autocomplete', {params: params});
            };

            /**
             * @ngdoc method
             * @methodOf nix.api.service:nixApi
             * @name nix.api.service:nixApi#natural
             *
             * @param {string} data Plain text with each phrase separated by a new line.
             * @param {number} [gram_weight] Multiplier when calculating total.nutrients
             *
             * @description
             * The natural endpoint allows you to translate plane text into a full spectrum analysis.
             *
             * {@link https://developer.nutritionix.com/docs/v2/natural}
             */
            nixApi.natural = function (data, gram_weight) {
                return nixApi('/natural', {
                    method:  'POST',
                    data:    data,
                    params:  gram_weight ? {gram_weight: gram_weight} : {},
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                });
            };

            /**
             * @ngdoc method
             * @methodOf nix.api.service:nixApi
             * @name nix.api.service:nixApi#search
             *
             * @param {string|object} q The search phrase in plain text.
             *                          Full configuration object can also be passed as first parameter
             * @param {number} [limit]  Maximum results in response Requires offset
             * @param {number} [offset] Search offset for paging through results Requires limit
             * @param {string} [search_nutrient] Search offset for paging through results Requires limit
             *
             * @description
             *
             * The V2 search API gives you fast, responsive, and accurate results for cpg (consumer package goods),
             * USDA, and restaurant foods.
             * This version of search is based on autocomplete principles making it easy for you to show your
             * users exactly what they're looking for.
             * The API also attempts to find an exact_match for the search phrase and will explicitly tell you when
             * a match has been found along side your standard results.
             *
             * {@link https://developer.nutritionix.com/docs/v2/search}
             */
            nixApi.search = function (q, limit, offset, search_nutrient) {
                var defaults = {
                        q:               null,
                        // use these for paging
                        limit:           10,
                        offset:          0,
                        // controls the basic nutrient returned in search
                        search_nutrient: 'calories'
                    },
                    params;

                if (angular.isObject(q)) {
                    params = q;
                } else {
                    params = {
                        q:               q,
                        limit:           limit,
                        offset:          offset,
                        search_nutrient: search_nutrient
                    };
                }

                angular.forEach(defaults, function (value, key) {
                    if (!params[key]) {
                        params[key] = value;
                    }
                });

                return nixApi('/search', {params: params});

            };

            /**
             * @ngdoc method
             * @methodOf nix.api.service:nixApi
             * @name nix.api.service:nixApi#brand_search
             *
             * @param {string|object}   q              The search phrase in plain text.
             *                                         Full configuration object can also be passed as first parameter
             *
             * @param {number|number[]} type           1=restaurant, 2=CPG, 3=USDA / Nutritionix.
             *                                         You can pass more than one type using an array
             *
             * @param {number}          [limit]        Maximum results in response Requires offset
             *
             * @param {number}          [offset]       Search offset for paging through results Requires limit
             *
             * @param {boolean}         [mobile_calc]  Set to true to include mobile restaurant caclulator url
             *
             * @param {boolean}         [desktop_calc] Set to true to include desktop restaurant calculator url
             *
             * @description
             * The V2 search API gives you fast, responsive, and accurate results for cpg (consumer package goods),
             * USDA, and restaurant foods.
             * This version of search is based on autocomplete principles making it easy for you to show your
             * users exactly what they're looking for.
             * The API also attempts to find an exact_match for the search phrase and will explicitly tell you when
             * a match has been found along side your standard results.
             *
             * {@link https://developer.nutritionix.com/docs/v2/brand_search}
             */
            nixApi.brand_search = function (q, type, limit, offset, mobile_calc, desktop_calc) {
                var defaults = {
                        q:    null,
                        type: 1
                    },
                    params;

                if (angular.isObject(q)) {
                    params = q;
                } else {
                    params = {
                        q:    q,
                        type: type
                    };

                    if (limit || offset) {
                        params.limit = limit;
                        params.offset = offset;
                    }

                    if (mobile_calc) {
                        params.mobile_calc = 'true';
                    }

                    if (desktop_calc) {
                        params.desktop_calc = 'true';
                    }
                }

                angular.forEach(defaults, function (value, key) {
                    if (!params[key]) {
                        params[key] = value;
                    }
                });

                return nixApi('/search/brands', {params: params});

            };

            /**
             * @ngdoc method
             * @methodOf nix.api.service:nixApi
             * @name nix.api.service:nixApi#item
             *
             * @param {string} id Item <b>id</b> or <b>resource_id</b>
             *
             * @description
             * Locate an item by its id or by a search `resource_id`
             *
             * {@link https://developer.nutritionix.com/docs/v2/item}
             */
            nixApi.item = function (id) {
                if (angular.isObject(id)) {
                    id = id.id || id.resource_id;
                }

                return nixApi('/item/' + id);
            };

            /**
             * @ngdoc method
             * @methodOf nix.api.service:nixApi
             * @name nix.api.service:nixApi#brand
             *
             * @param {string} id the identifier for the brand
             *
             * @description
             * Locate a brand by its id
             *
             * {@link https://developer.nutritionix.com/docs/v2/brand}
             */
            nixApi.brand = function (id) {
                if (angular.isObject(id)) {
                    id = id.id;
                }

                return nixApi('/brand/' + id);
            };

            return nixApi;
        };
    });

    /**
     * @ngdoc filter
     * @name nix.api.filter:nutrient
     * @function
     *
     * @description
     * Finds nutrition with specified id in array of nutrients
     *
     * @param {array} nutrients Collection of nutrients
     * @param {string} id Nutrient attr_id to search for
     * @param {string} [attribute] property to immediately return from found nutrient
     *
     * @returns {*} Nutrient object itself, or it's property named with the third param
     *
     */
    module.filter('nutrient', function () {
        return function nutrient(nutrients, id, attribute) {
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

    /**
     * @ngdoc filter
     * @name nix.api.filter:naturalToItem
     * @function
     *
     * @description
     * Converts element from natural endpoint's results array to item-like structured object
     *
     * @param {object} natural One of natural endpoint results
     *
     * @returns {object} Item-like structured object
     *
     */
    module.filter('naturalToItem', function () {
        return function naturalToItem(natural) {
            if (angular.isObject(natural)) {
                return  {
                    id:                   null,
                    name:                 natural.parsed_query.food,
                    type:                 null,
                    tags:                 [],
                    ingredient_statement: null,
                    brand:                {
                        id:      null,
                        name:    null,
                        website: null,
                        logo:    null
                    },
                    images:               {
                        front: {
                            full:  null,
                            thumb: null
                        },
                        label: {
                            full: null
                        }
                    },

                    label: {
                        nutrients: natural.nutrients,
                        serving:   {
                            qty:           natural.serving_qty,
                            uom:           natural.serving_unit,
                            per_container: null,
                            metric:        {
                                qty: natural.serving_weight,
                                uom: "g"
                            }
                        }
                    }
                };
            }
        };
    });
})(window, window.angular);
