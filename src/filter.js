// filter array for unique values
/*
only for arrays containing primitive  types:
undefined
null
boolean
number
string   
*/

const Array = [1, 1, 2, 3, 3, 4, 6, 6, 5, 8, 8, 2, 9, 0, 0];
const uniqueArray = [...new Set(Array)];
console.log("------------------This gives unique vales with new syntax in Es6-----------")
console.log(uniqueArray);

