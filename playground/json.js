// // converting object to a string
// var obj = {
// 	name : 'Mykola'
// };
// // JSON.stringify creates JSON line from object
// var stringObj = JSON.stringify



// Creating JSON object
// we need to convert it to an object
// string
var personString = '{"name" : "Mykola", "age": 28}';
// JSON.parse converting to an object
var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(personString);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
}



// converting the note to JSON 
var originalNoteString = JSON.stringify(originalNote);
// console.log(originalNote);
console.log(originalNoteString);

// Writing the JSON data to file
fs.writeFileSync('notes.json',originalNoteString);

// Getting data from file
var noteString = fs.readFileSync('notes.json');
console.log(noteString);

// converting to object
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
