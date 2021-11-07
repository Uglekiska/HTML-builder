const path = require('path');
const fs = require('fs');
const {
	stdin,
	stdout
} = process;


function createAndWrite() {
	process.on('SIGINT', () => {
			console.log('------\nПока !\n------');
			process.exit();
	});
	fs.open(`./02-write-file/text.txt`, 'w', () => {});
	console.log('-------------\nВведите текст\n-------------');
	stdin.on('data', data => {
		if (data.toString() === 'exit\r\n') {
			console.log('------\nПока !\n------');
			process.exit();
		} else {
			fs.appendFile(`./02-write-file/text.txt`, `${data}`, () => {});
		}
	});
}

createAndWrite();