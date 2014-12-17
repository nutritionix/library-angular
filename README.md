Library Angular
===============

This is client library for using [Nutritionix Api v2](https://developer.nutritionix.com/docs/v2) 
in AngularJS applications.

Installation
------------

```sh
bower install --save angular-nutritionix-api
```

```html
<script src="/bower_components/angular-nutritionix-api/angular-nutritionix-api.min.js"></script>
```

Usage
-----

Add module as application dependency

```javascript
angular.module('myApp', ['nix.api']);
```

Load service into your controller and call it's endpoints

Please refer to [API reference](http://nutritionix.github.io/library-angular/docs/#/api/nix.api)
and examples on [homepage](http://nutritionix.github.io/library-angular/)

```javascript
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
```



