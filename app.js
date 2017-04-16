console.log('Starting app');

const fs = require('fs'); // fs (File System) is a built in Node.js module
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);


if(command === 'add'){
	notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
	notes.listNotes();
} else if(command === 'read') {
	notes.readNote(argv.title);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else {
	console.log('Command not recognized');
}