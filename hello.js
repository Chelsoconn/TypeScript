//variables assigned to an object with more properties can be assigned to 
//Fruit but these are no longer accessible, but not vise versa
//also object literals with less properties than the superset cannot be assigned to the 
//superset type 
function describeFruit(fruit) {
    return "".concat(fruit.name, " is a ").concat(fruit.color, " fruit.");
}
var goldenDelicious = {
    name: "Golden Delicious",
    color: "yellow",
    variety: "apple",
};
console.log(describeFruit(goldenDelicious)); //we are passing in an argumment with 
//more properties than the allowed type. This is ok bc we are 
//assigning the argument to the parameter variable 
