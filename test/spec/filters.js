'use strict';

describe('Angular Nutritionix Api: filter', function () {
    beforeEach(module('nix.api'));

    describe('"nutrient"', function () {
        var nutrients = [
            {
                "attr_id":  203,
                "value":    27,
                "unit":     "g",
                "name":     "Protein",
                "usda_tag": "PROCNT"
            },
            {
                "attr_id":  204,
                "value":    26,
                "unit":     "g",
                "name":     "Total Fat",
                "usda_tag": "FAT"
            },
            {
                "attr_id":  205,
                "value":    46,
                "unit":     "g",
                "name":     "Total Carbohydate",
                "usda_tag": "CHOCDF"
            },
            {
                "attr_id":  207,
                "value":    null,
                "unit":     "g",
                "name":     "Ash",
                "usda_tag": "ASH"
            },
            {
                "attr_id":  208,
                "value":    530,
                "unit":     "kcal",
                "name":     "Calories",
                "usda_tag": "ENERC_KCAL"
            },
            {
                "attr_id":  209,
                "value":    null,
                "unit":     "g",
                "name":     "Starch",
                "usda_tag": "STARCH"
            },
            {
                "attr_id":  210,
                "value":    null,
                "unit":     "g",
                "name":     "Sucrose",
                "usda_tag": "SUCS"
            },
            {
                "attr_id":  211,
                "value":    null,
                "unit":     "g",
                "name":     "Glucose",
                "usda_tag": "GLUS"
            },
            {
                "attr_id":  212,
                "value":    null,
                "unit":     "g",
                "name":     "Fructose",
                "usda_tag": "FRUS"
            },
            {
                "attr_id":  213,
                "value":    null,
                "unit":     "g",
                "name":     "Lactose",
                "usda_tag": "LACS"
            },
            {
                "attr_id":  214,
                "value":    null,
                "unit":     "g",
                "name":     "Maltose",
                "usda_tag": "MALS"
            },
            {
                "attr_id":  221,
                "value":    null,
                "unit":     "g",
                "name":     "Alcohol",
                "usda_tag": "ALC"
            },
            {
                "attr_id":  255,
                "value":    null,
                "unit":     "g",
                "name":     "Water",
                "usda_tag": "WATER"
            },
            {
                "attr_id":  262,
                "value":    null,
                "unit":     "mg",
                "name":     "Caffeine",
                "usda_tag": "CAFFN"
            },
            {
                "attr_id":  263,
                "value":    null,
                "unit":     "mg",
                "name":     "Theobromine",
                "usda_tag": "THEBRN"
            },
            {
                "attr_id":  268,
                "value":    null,
                "unit":     "kJ",
                "name":     null,
                "usda_tag": "ENERC_KJ"
            },
            {
                "attr_id":  269,
                "value":    11,
                "unit":     "g",
                "name":     "Sugars",
                "usda_tag": "SUGAR"
            },
            {
                "attr_id":  287,
                "value":    null,
                "unit":     "g",
                "name":     "Galactose",
                "usda_tag": "GALS"
            },
            {
                "attr_id":  291,
                "value":    2,
                "unit":     "g",
                "name":     "Dietary Fiber",
                "usda_tag": "FIBTG"
            },
            {
                "attr_id":  301,
                "value":    null,
                "unit":     "mg",
                "name":     "Calcium %",
                "usda_tag": "CA"
            },
            {
                "attr_id":  303,
                "value":    null,
                "unit":     "mg",
                "name":     "Iron %",
                "usda_tag": "FE"
            },
            {
                "attr_id":  304,
                "value":    null,
                "unit":     "mg",
                "name":     "Magnesium",
                "usda_tag": "MG"
            },
            {
                "attr_id":  305,
                "value":    null,
                "unit":     "mg",
                "name":     "Phosphorus",
                "usda_tag": "P"
            },
            {
                "attr_id":  306,
                "value":    null,
                "unit":     "mg",
                "name":     "Potassium",
                "usda_tag": "K"
            },
            {
                "attr_id":  307,
                "value":    1210,
                "unit":     "mg",
                "name":     "Sodium",
                "usda_tag": "NA"
            },
            {
                "attr_id":  309,
                "value":    null,
                "unit":     "mg",
                "name":     "Zinc",
                "usda_tag": "ZN"
            },
            {
                "attr_id":  312,
                "value":    null,
                "unit":     "mg",
                "name":     "Copper",
                "usda_tag": "CU"
            },
            {
                "attr_id":  313,
                "value":    null,
                "unit":     "µg",
                "name":     "Fluoride",
                "usda_tag": "FLD"
            },
            {
                "attr_id":  315,
                "value":    null,
                "unit":     "mg",
                "name":     "Manganese",
                "usda_tag": "MN"
            },
            {
                "attr_id":  317,
                "value":    null,
                "unit":     "µg",
                "name":     "Selenium",
                "usda_tag": "SE"
            },
            {
                "attr_id":  318,
                "value":    null,
                "unit":     "IU",
                "name":     "Vitamin A %",
                "usda_tag": "VITA_IU"
            },
            {
                "attr_id":  319,
                "value":    null,
                "unit":     "µg",
                "name":     "Retinol",
                "usda_tag": "RETOL"
            },
            {
                "attr_id":  401,
                "value":    null,
                "unit":     "mg",
                "name":     "Vitamin C %",
                "usda_tag": "VITC"
            },
            {
                "attr_id":  601,
                "value":    90,
                "unit":     "mg",
                "name":     "Cholesterol",
                "usda_tag": "CHOLE"
            },
            {
                "attr_id":  605,
                "value":    null,
                "unit":     "g",
                "name":     "Trans Fat",
                "usda_tag": "FATRN"
            },
            {
                "attr_id":  606,
                "value":    5,
                "unit":     "g",
                "name":     "Saturated Fat",
                "usda_tag": "FASAT"
            },
            {
                "attr_id":  645,
                "value":    null,
                "unit":     "g",
                "name":     "Monounsaturated Fat",
                "usda_tag": "FAMS"
            },
            {
                "attr_id":  646,
                "value":    null,
                "unit":     "g",
                "name":     "Polyunsaturated Fat",
                "usda_tag": "FAPU"
            }
        ];

        it('should retrieve single nutrient object from array of nutrients by it\'s id',
            inject(function (nutrientFilter) {
                expect(nutrientFilter(nutrients, 208)).toEqual(
                    {
                        attr_id:  208,
                        value:    530,
                        unit:     'kcal',
                        name:     'Calories',
                        usda_tag: 'ENERC_KCAL'
                    }
                );
            }));

        it('should find single nutrient object from array of nutrients by it\'s id nd return it\'s "value" property',
            inject(function (nutrientFilter) {
                expect(nutrientFilter(nutrients, 208, 'value')).toEqual(530);
            }));
    });
});
