// Truncating Arrays
let arrays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrays.length = 4;
console.log("-----------------Truncating arrays -------------");
console.log(arrays); //Result : 0,1,2,3

// Faster runtime
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.slice(0, 4);
console.log("-----------------Truncating arrays in faster way-------------");
console.log(array); //Result : 0,1,2,3

// Getting last item/(s) of an array
let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("----------------- Getting the last item of array -------------");
console.log(array1.slice(-1));
console.log(array1.slice(-2));
console.log(array1.slice(-3));
console.log(array1.slice(-4));
