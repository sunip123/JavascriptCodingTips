// format json using stringify
const data = {
    name : 'Sujit',
    age : 26,
    company : 'Apple',
        education: {
            college : 'RCET R1',
        },
};
console.log('------------ json format in same line --------------');
console.log(JSON.stringify(data));
console.log('------------ json format --------------');
console.log(JSON.stringify(data, null, '\t'));
console.log('------------ json format 2 spaces --------------');
console.log(JSON.stringify(data, null, 2));
