console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	// new note
	var note = {
		title,
		body
	}

	// preventing from using the data if added moew than one note
	var notesString = fs.readFileSync('notes-data.json');
	// parcing the received data into an array
	notes = JSON.parse(notesString);

	//adding note to the notes array
	notes.push(note);
	//writing to the file
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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