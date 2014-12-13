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

    describe('"naturalToItem"', function () {
        var natural = {
            "serving_weight":       120,
            "serving_qty":          1,
            "ndb_no":               11143,
            "serving_unit":         "cup",
            "tier":                 1,
            "usda_fields_v2_grams": 0,
            "nutrients":            [
                {"attr_id": 255, "value": 114.516, "unit": "g", "name": "Water", "usda_tag": "WATER"},
                {"attr_id": 208, "value": 19.2, "unit": "kcal", "name": "Energy", "usda_tag": "ENERC_KCAL"},
                {"attr_id": 268, "value": 80.39999999999999, "unit": "kJ", "name": "Energy", "usda_tag": "ENERC_KJ"},
                {"attr_id": 203, "value": 0.828, "unit": "g", "name": "Protein", "usda_tag": "PROCNT"},
                {"attr_id": 204, "value": 0.20400000000000001, "unit": "g", "name": "Total lipid (fat)", "usda_tag": "FAT"},
                {"attr_id": 207, "value": 0.9, "unit": "g", "name": "Ash", "usda_tag": "ASH"},
                {"attr_id": 205, "value": 3.564, "unit": "g", "name": "Carbohydrate, by difference", "usda_tag": "CHOCDF"},
                {"attr_id": 291, "value": 1.92, "unit": "g", "name": "Fiber, total dietary", "usda_tag": "FIBTG"},
                {"attr_id": 269, "value": 1.608, "unit": "g", "name": "Sugars, total", "usda_tag": "SUGAR"},
                {"attr_id": 210, "value": 0.09599999999999999, "unit": "g", "name": "Sucrose", "usda_tag": "SUCS"},
                {"attr_id": 211, "value": 0.48, "unit": "g", "name": "Glucose (dextrose)", "usda_tag": "GLUS"},
                {"attr_id": 212, "value": 0.44399999999999995, "unit": "g", "name": "Fructose", "usda_tag": "FRUS"},
                {"attr_id": 213, "value": 0, "unit": "g", "name": "Lactose", "usda_tag": "LACS"},
                {"attr_id": 214, "value": 0, "unit": "g", "name": "Maltose", "usda_tag": "MALS"},
                {"attr_id": 287, "value": 0.576, "unit": "g", "name": "Galactose", "usda_tag": "GALS"},
                {"attr_id": 209, "value": 0, "unit": "g", "name": "Starch", "usda_tag": "STARCH"},
                {"attr_id": 301, "value": 47.99999999999999, "unit": "mg", "name": "Calcium, Ca", "usda_tag": "CA"},
                {"attr_id": 303, "value": 0.24, "unit": "mg", "name": "Iron, Fe", "usda_tag": "FE"},
                {"attr_id": 304, "value": 13.2, "unit": "mg", "name": "Magnesium, Mg", "usda_tag": "MG"},
                {"attr_id": 305, "value": 28.8, "unit": "mg", "name": "Phosphorus, P", "usda_tag": "P"},
                {"attr_id": 306, "value": 312, "unit": "mg", "name": "Potassium, K", "usda_tag": "K"},
                {"attr_id": 307, "value": 95.99999999999999, "unit": "mg", "name": "Sodium, Na", "usda_tag": "NA"},
                {"attr_id": 309, "value": 0.156, "unit": "mg", "name": "Zinc, Zn", "usda_tag": "ZN"},
                {"attr_id": 312, "value": 0.042, "unit": "mg", "name": "Copper, Cu", "usda_tag": "CU"},
                {"attr_id": 315, "value": 0.12359999999999999, "unit": "mg", "name": "Manganese, Mn", "usda_tag": "MN"},
                {"attr_id": 317, "value": 0.48, "unit": "µg", "name": "Selenium, Se", "usda_tag": "SE"},
                {"attr_id": 313, "value": 4.8, "unit": "µg", "name": "Fluoride, F", "usda_tag": "FLD"},
                {"attr_id": 401, "value": 3.72, "unit": "mg", "name": "Vitamin C, total ascorbic acid", "usda_tag": "VITC"},
                {"attr_id": 404, "value": 0.025200000000000004, "unit": "mg", "name": "Thiamin", "usda_tag": "THIA"},
                {"attr_id": 405, "value": 0.0684, "unit": "mg", "name": "Riboflavin", "usda_tag": "RIBF"},
                {"attr_id": 406, "value": 0.38399999999999995, "unit": "mg", "name": "Niacin", "usda_tag": "NIA"},
                {"attr_id": 410, "value": 0.29519999999999996, "unit": "mg", "name": "Pantothenic acid", "usda_tag": "PANTAC"},
                {"attr_id": 415, "value": 0.08879999999999999, "unit": "mg", "name": "Vitamin B-6", "usda_tag": "VITB6A"},
                {"attr_id": 417, "value": 43.199999999999996, "unit": "µg", "name": "Folate, total", "usda_tag": "FOL"},
                {"attr_id": 431, "value": 0, "unit": "µg", "name": "Folic acid", "usda_tag": "FOLAC"},
                {"attr_id": 432, "value": 43.199999999999996, "unit": "µg", "name": "Folate, food", "usda_tag": "FOLFD"},
                {"attr_id": 435, "value": 43.199999999999996, "unit": "µg", "name": "Folate, DFE", "usda_tag": "FOLDFE"},
                {"attr_id": 421, "value": 7.319999999999999, "unit": "mg", "name": "Choline, total", "usda_tag": "CHOLN"},
                {"attr_id": 454, "value": 0.12, "unit": "mg", "name": "Betaine", "usda_tag": "BETN"},
                {"attr_id": 418, "value": 0, "unit": "µg", "name": "Vitamin B-12", "usda_tag": "VITB12"},
                {"attr_id": 320, "value": 26.4, "unit": "µg", "name": "Vitamin A, RAE", "usda_tag": "VITA_RAE"},
                {"attr_id": 319, "value": 0, "unit": "µg", "name": "Retinol", "usda_tag": "RETOL"},
                {"attr_id": 321, "value": 323.99999999999994, "unit": "µg", "name": "Carotene, beta", "usda_tag": "CARTB"},
                {"attr_id": 322, "value": 0, "unit": "µg", "name": "Carotene, alpha", "usda_tag": "CARTA"},
                {"attr_id": 334, "value": 0, "unit": "µg", "name": "Cryptoxanthin, beta", "usda_tag": "CRYPX"},
                {"attr_id": 318, "value": 538.8, "unit": "IU", "name": "Vitamin A, IU", "usda_tag": "VITA_IU"},
                {"attr_id": 337, "value": 0, "unit": "µg", "name": "Lycopene", "usda_tag": "LYCPN"},
                {"attr_id": 338, "value": 339.59999999999997, "unit": "µg", "name": "Lutein + zeaxanthin", "usda_tag": "LUT+ZEA"},
                {"attr_id": 323, "value": 0.324, "unit": "mg", "name": "Vitamin E (alpha-tocopherol)", "usda_tag": "TOCPHA"},
                {"attr_id": 341, "value": 0, "unit": "mg", "name": "Tocopherol, beta", "usda_tag": "TOCPHB"},
                {"attr_id": 342, "value": 0, "unit": "mg", "name": "Tocopherol, gamma", "usda_tag": "TOCPHG"},
                {"attr_id": 343, "value": 0, "unit": "mg", "name": "Tocopherol, delta", "usda_tag": "TOCPHD"},
                {"attr_id": 344, "value": 0.011999999999999999, "unit": "mg", "name": "Tocotrienol, alpha", "usda_tag": "TOCTRA"},
                {"attr_id": 345, "value": 0, "unit": "mg", "name": "Tocotrienol, beta", "usda_tag": "TOCTRB"},
                {"attr_id": 346, "value": 0, "unit": "mg", "name": "Tocotrienol, gamma", "usda_tag": "TOCTRG"},
                {"attr_id": 347, "value": 0, "unit": "mg", "name": "Tocotrienol, delta", "usda_tag": "TOCTRD"},
                {"attr_id": 328, "value": 0, "unit": "µg", "name": "Vitamin D (D2 + D3)", "usda_tag": "VITD"},
                {"attr_id": 324, "value": 0, "unit": "IU", "name": "Vitamin D", "usda_tag": "VITD"},
                {"attr_id": 430, "value": 35.16, "unit": "µg", "name": "Vitamin K (phylloquinone)", "usda_tag": "VITK1"},
                {"attr_id": 429, "value": 0, "unit": "µg", "name": "Dihydrophylloquinone", "usda_tag": "VITK1D"},
                {"attr_id": 606, "value": 0.05040000000000001, "unit": "g", "name": "Fatty acids, total saturated", "usda_tag": "FASAT"},
                {"attr_id": 607, "value": 0, "unit": "g", "name": "4:0", "usda_tag": "F4D0"},
                {"attr_id": 608, "value": 0, "unit": "g", "name": "6:0", "usda_tag": "F6D0"},
                {"attr_id": 609, "value": 0, "unit": "g", "name": "8:0", "usda_tag": "F8D0"},
                {"attr_id": 610, "value": 0, "unit": "g", "name": "10:0", "usda_tag": "F10D0"},
                {"attr_id": 611, "value": 0, "unit": "g", "name": "12:0", "usda_tag": "F12D0"},
                {"attr_id": 612, "value": 0.0012, "unit": "g", "name": "14:0", "usda_tag": "F14D0"},
                {"attr_id": 613, "value": 0.044399999999999995, "unit": "g", "name": "16:0", "usda_tag": "F16D0"},
                {"attr_id": 614, "value": 0.0048, "unit": "g", "name": "18:0", "usda_tag": "F18D0"},
                {"attr_id": 645, "value": 0.0384, "unit": "g", "name": "Fatty acids, total monounsaturated", "usda_tag": "FAMS"},
                {"attr_id": 626, "value": 0.0012, "unit": "g", "name": "16:1 undifferentiated", "usda_tag": "F16D1"},
                {"attr_id": 617, "value": 0.0372, "unit": "g", "name": "18:1 undifferentiated", "usda_tag": "F18D1"},
                {"attr_id": 628, "value": 0, "unit": "g", "name": "20:1", "usda_tag": "F20D1"},
                {"attr_id": 630, "value": 0, "unit": "g", "name": "22:1 undifferentiated", "usda_tag": "F22D1"},
                {"attr_id": 646, "value": 0.0948, "unit": "g", "name": "Fatty acids, total polyunsaturated", "usda_tag": "FAPU"},
                {"attr_id": 618, "value": 0.0948, "unit": "g", "name": "18:2 undifferentiated", "usda_tag": "F18D2"},
                {"attr_id": 619, "value": 0, "unit": "g", "name": "18:3 undifferentiated", "usda_tag": "F18D3"},
                {"attr_id": 627, "value": 0, "unit": "g", "name": "18:4", "usda_tag": "F18D4"},
                {"attr_id": 620, "value": 0, "unit": "g", "name": "20:4 undifferentiated", "usda_tag": "F20D4"},
                {"attr_id": 629, "value": 0, "unit": "g", "name": "20:5 n-3 (EPA)", "usda_tag": "F20D5"},
                {"attr_id": 631, "value": 0, "unit": "g", "name": "22:5 n-3 (DPA)", "usda_tag": "F22D5"},
                {"attr_id": 621, "value": 0, "unit": "g", "name": "22:6 n-3 (DHA)", "usda_tag": "F22D6"},
                {"attr_id": 601, "value": 0, "unit": "mg", "name": "Cholesterol", "usda_tag": "CHOLE"},
                {"attr_id": 636, "value": 7.2, "unit": "mg", "name": "Phytosterols", "usda_tag": "PHYSTR"},
                {"attr_id": 501, "value": 0.010799999999999999, "unit": "g", "name": "Tryptophan", "usda_tag": "TRP_G"},
                {"attr_id": 502, "value": 0.023999999999999997, "unit": "g", "name": "Threonine", "usda_tag": "THR_G"},
                {"attr_id": 503, "value": 0.025200000000000004, "unit": "g", "name": "Isoleucine", "usda_tag": "ILE_G"},
                {"attr_id": 504, "value": 0.0384, "unit": "g", "name": "Leucine", "usda_tag": "LEU_G"},
                {"attr_id": 505, "value": 0.0324, "unit": "g", "name": "Lysine", "usda_tag": "LYS_G"},
                {"attr_id": 506, "value": 0.005999999999999999, "unit": "g", "name": "Methionine", "usda_tag": "MET_G"},
                {"attr_id": 507, "value": 0.0048, "unit": "g", "name": "Cystine", "usda_tag": "CYS_G"},
                {"attr_id": 508, "value": 0.023999999999999997, "unit": "g", "name": "Phenylalanine", "usda_tag": "PHE_G"},
                {"attr_id": 509, "value": 0.010799999999999999, "unit": "g", "name": "Tyrosine", "usda_tag": "TYR_G"},
                {"attr_id": 510, "value": 0.0324, "unit": "g", "name": "Valine", "usda_tag": "VAL_G"},
                {"attr_id": 511, "value": 0.023999999999999997, "unit": "g", "name": "Arginine", "usda_tag": "ARG_G"},
                {"attr_id": 512, "value": 0.0144, "unit": "g", "name": "Histidine", "usda_tag": "HISTN_G"},
                {"attr_id": 513, "value": 0.0276, "unit": "g", "name": "Alanine", "usda_tag": "ALA_G"},
                {"attr_id": 514, "value": 0.1404, "unit": "g", "name": "Aspartic acid", "usda_tag": "ASP_G"},
                {"attr_id": 515, "value": 0.10799999999999998, "unit": "g", "name": "Glutamic acid", "usda_tag": "GLU_G"},
                {"attr_id": 516, "value": 0.025200000000000004, "unit": "g", "name": "Glycine", "usda_tag": "GLY_G"},
                {"attr_id": 517, "value": 0.021599999999999998, "unit": "g", "name": "Proline", "usda_tag": "PRO_G"},
                {"attr_id": 518, "value": 0.023999999999999997, "unit": "g", "name": "Serine", "usda_tag": "SER_G"},
                {"attr_id": 221, "value": 0, "unit": "g", "name": "Alcohol, ethyl", "usda_tag": "ALC"},
                {"attr_id": 262, "value": 0, "unit": "mg", "name": "Caffeine", "usda_tag": "CAFFN"},
                {"attr_id": 263, "value": 0, "unit": "mg", "name": "Theobromine", "usda_tag": "THEBRN"}
            ],
            "parsed_query":         {
                "qty":   1,
                "unit":  "cup",
                "food":  "celery",
                "query": "1 cup celery"
            }, "idx":               0
        };

        it('should return an object',
            inject(function (naturalToItemFilter) {
                expect(angular.isObject(naturalToItemFilter(natural))).toEqual(true);
            }));
    });
});
