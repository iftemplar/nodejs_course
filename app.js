console.log('Starting app');

const fs = require('fs'); // fs (File System) is a built in Node.js module
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs', argv);


if(command === 'add'){
	console.log('Adding a note');
} else if(command === 'list') {
	console.log('Listing notes');
} else if(command === 'read') {
	console.log('Reading a note');
} else if(command === 'remove') {
    console.log('Removing a note');
} else {
	console.log('Command not recognized');
}