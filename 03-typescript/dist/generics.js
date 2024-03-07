"use strict";
const score = [];
const names = [];
function identityOne(value) {
    return value;
}
function identityTwo(value) {
    return value;
}
//Angular brackets <>
function identityThree(value) {
    return value;
}
// identityThree(13);
// identityThree("13");
// identityThree(true);
//Shortcut
function identityFour(value) {
    return value;
}
//Shortcut can be any letter
function identityFive(value) {
    return value;
}
identityFive(13);
identityFive({ brand: "Soccer", type: 500 });
function getSearchProducts(products) {
    const index = 3;
    return products[index];
}
//Arrow function
const searchMoreProducts = (products) => {
    const index = 13;
    return products[index];
};
//This comma <T,> is just to say that is not a html ou jsx tag. It's a generic one
const searchMoreProductsTwo = (products) => {
    const index = 13;
    return products[index];
};
