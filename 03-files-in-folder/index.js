const testFolder = './03-files-in-folder/secret-folder/';
const fs = require('fs');
let name = '';
let type = '';

function mySplit(elem) {
	let a = elem.split('');
	let y = a.indexOf('.');
	type = a.slice(y + 1, a.length).join('');
	name = a.slice(0, y).join('');
	return `${name} - ${type}`;
}

const files = fs.readdirSync(testFolder, {
		withFileTypes: true
	})
	.filter(item => !item.isDirectory())
	.map(item => item.name);

for (let i = 0; i < files.length; i++) {
	fs.stat(`./03-files-in-folder/secret-folder/${files[i]}`, (err, stats) => {
		fileSize = stats.size;
		console.log(mySplit(files[i]) + ` - ${fileSize / 1000}kb`);
	})
}