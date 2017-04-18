// // converting object to a string
// var obj = {
// 	name : 'Mykola'
// };
// var stringObj = JSON.stringify



// Creating JSON object
// we need to convert it to an object
// string
var personString = '{"name" : "Mykola", "age": 28}';
// converting
var person = JSON.parse(personString);
console.log(typeof person);
console.log(personString);