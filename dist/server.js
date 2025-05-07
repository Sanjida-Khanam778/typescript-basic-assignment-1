"use strict";
function formatString(input, toUpper) {
    if (toUpper || toUpper === null || toUpper === undefined) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
const result = formatString("Hello World");
console.log(result);
