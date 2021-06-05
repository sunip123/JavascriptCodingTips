// Null coalesing operator -- ??
null ?? 'hello world'; //null 
undefined ?? 'hello world'; //undefined

// Note -- this operator only looks for null & undefined
false ?? 'hello world'; //false
0 ?? 'hello world'; //0

//use in Chaining of operator
null ?? undefined ?? false ?? 'hello world'; //false
null ?? '' ?? undefined ?? false ?? 'hello world'; //''



