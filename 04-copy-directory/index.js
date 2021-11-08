const path = require('path');
const fs = require('fs');
const testFolder = './04-copy-directory/files/';
var filesO = fs.readdirSync(testFolder, (err, files) => {});

function copyFolder() {

	fs.stat('./04-copy-directory/files-copy', function (err) {
		if (!err) {
			fs.readdir('./04-copy-directory/files-copy', (err, files) => {
				if (err) throw err;
				for (const fileN of files) {
					fs.unlink(path.join('./04-copy-directory/files-copy', fileN), err => {
						if (err) throw err;
					});
					for (let i = 0; i < filesO.length; i++) {
						fs.createReadStream(`./04-copy-directory/files/${filesO[i]}`).pipe(fs.createWriteStream(`./04-copy-directory/files-copy/${filesO[i]}`));
					};
				}
			});
			

		} else if (err.code === 'ENOENT') {
			fs.mkdir('./04-copy-directory/files-copy', () => {});
			for (let i = 0; i < filesO.length; i++) {
				fs.createReadStream(`./04-copy-directory/files/${filesO[i]}`).pipe(fs.createWriteStream(`./04-copy-directory/files-copy/${filesO[i]}`));
			}
		}
	});
}

copyFolder();