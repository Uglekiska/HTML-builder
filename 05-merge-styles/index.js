const path = require('path');
const fs = require('fs');


fs.readdir('./05-merge-styles/styles/', {
	withFileTypes: true
}, function (err, items) {

	let files = items.filter(item => !item.isDirectory()).map(item => item.name);
	let filterFiles = [];

	files.forEach(function (item) {
		if (item.split('').slice(item.length - 4, item.length).join('') === '.css') {
			filterFiles.push(item);
		}
	});

	fs.open('./05-merge-styles/project-dist/bundle.css', 'w', (err) => {});
	fs.appendFile('./05-merge-styles/project-dist/bundle.css', '', (err) => {});
	for (let index = 0; index < filterFiles.length; index++) {
		fs.readFile(`./05-merge-styles/styles/${filterFiles[index]}`, 'utf8', (err, data) => {
			fs.appendFile('./05-merge-styles/project-dist/bundle.css', `${data}`, (err) => {});
		});
	}
});