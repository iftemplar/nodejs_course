console.log('Starting app');

const fs = require('fs'); // fs (File System) is a built in Node.js module
const os = require('os'); // also built in module

//getting OS user info
var user = os.userInfo();
// console.log(user);

// appending text to the .txt file
// if error occured - throw an error
// if everything is ok - show a message to the console
// user.username gets your OS' username (iftemplar)
fs.appendFile('greetings.txt', `\nHello ${user.username}`, (err) => { // `\nHello ${user.username}` is ES6 template strings way of writing '\nHello ' + user.username
	if (err) throw err;
	  console.log('The "data to append" was appended to file!');
});

