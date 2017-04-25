console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {

	var notes = [];
	var note = {
		title,
		body
	};

	// if the file isn't empty - put the data inside the array
	try{
		var noteString = fs.readFileSync('notes-data2.json');
		notes = JSON.parse(noteString);
	} catch (e) {
		console.log("The file is empty");
	}

	// if user launched the app with --title flag which is arleary in the file
	var duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	// if there is no duplicates - add the new note
	if(duplicateNotes.length === 0) {
		notes.push(note);
		// JSON
		fs.writeFileSync('notes-data2.json', JSON.stringify(notes));
	}

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