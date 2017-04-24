console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {

	var notes = [];
	var note = {
		title,
		body
	};
	
	// JSON
	var noteString = fs.readFileSync('notes-data2.json');
	
	// OBJ
	notes = JSON.parse(noteString);

	notes.push(note);
	
	// JSON
	fs.writeFileSync('notes-data2.json', JSON.stringify(notes))

	try{

		catch (e){

		}
	}


	// console.log('Adding note');
	// // empty array
	// var notes = [];
	// // one item
	// var note = {
	// 	title,
	// 	body
	// };

	// try{
	// 	// fetching the existing file
	// 	// to prevent replacing the data
	// 	var noteString = fs.readFileSync('notes-data.json');
	// 	notes = JSON.parse(noteString);
	// }	catch (e) {

	// }

	// var duplacateNotes = notes.filter((note) => note.title === title);

	// if(duplacateNotes.length === 0){
	// 	// Add the note to the notes array
	// 	notes.push(note);
	// 	//adding stringified notes array to the file
	// 	fs.writeFileSync('notes-data.json', JSON.stringify(notes));		
	// } else{
	// 	console.log('Duplicate found !');
	// }

}

var listNotes = () => {
	console.log('Listing notes')
}

var readNote = (title) => {
	console.log('Reading note', title)
}

var removeNote = (title) => {
	console.log('Removing note', title)
}

module.exports = {
	addNote,
	listNotes,
	readNote,
	removeNote
};