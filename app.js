console.log('Starting app');

const fs = require('fs'); // fs (File System) is a built in Node.js module
const os = require('os'); // also built in module
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString("Mykola"));
var filteredArray = _.uniq(['Mykola', 123, 'Mykola', 1, 2, 123]);
console.log(filteredArray);

// var adding = notes.add(11,-9);
// console.log(adding);


// fs.appendFile('greetings.txt', `\nHello ${user.username}! You are ${notes.age}`, (err) => { // `\nHello ${user.username}` is ES6 template strings way of writing '\nHello ' + user.username
// 	if (err) throw err;
// 	  console.log('The "data to append" was appended to file!');
// });

