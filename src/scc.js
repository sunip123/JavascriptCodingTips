// short-circuit conditionals
 
let isValid = false;
if(isValid){
    gotoLogin();
}

// using short-circuit AND -- &&
isValid && gotoLogin();
const arg1 =  null;
let arg2;
if(arg1){
    arg2 = arg1;
}else{
    arg2 = 'Default';
}

// using short-circuit OR -- ||
// the same can be used by OR operator
//const arg2 = arg1 || 'Default';

