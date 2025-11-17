// EXERCICE: convertir le code JavaScript en TypeScript en typant correctement les variables et les fonctions. Pour l'instant, ne supporte que les tableaux de nombres.
/*!
 * arr-diff <https://github.com/jonschlinkert/arr-diff>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
'use strict';
function diff(arr) {
    var len = arguments.length;
    var idx = 0;
    while (++idx < len) {
        arr = diffArray(arr, arguments[idx]);
    }
    return arr;
}
;
var diffArray = function (one, two) {
    if (!Array.isArray(two)) {
        return one.slice();
    }
    var tlen = two.length;
    var olen = one.length;
    var idx = -1;
    var arr = [];
    while (++idx < olen) {
        var ele = one[idx];
        var hasEle = false;
        for (var i = 0; i < tlen; i++) {
            var val = two[i];
            if (ele === val) {
                hasEle = true;
                break;
            }
        }
        if (hasEle === false) {
            arr.push(ele);
        }
    }
    return arr;
};
var result1 = diff([1, 2, 3, 4]);
console.log(result1); // Output: [1, 3]
var result2 = diffArray([10, 20, 30, 40, 50], [20, 50, 60]);
console.log(result2); // Output: [10, 30, 40]
