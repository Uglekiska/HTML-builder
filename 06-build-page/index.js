const path = require('path');
const fs = require('fs');


fs.readdir('./06-build-page/styles/', { //выбираем css файлы
	withFileTypes: true
}, function (err, items) {

	let files = items.filter(item => !item.isDirectory()).map(item => item.name);
	let filterFiles = [];

	files.forEach(function (item) {
		if (item.split('').slice(item.length - 4, item.length).join('') === '.css') {
			filterFiles.push(item);
		}
	});
	fs.mkdir('./06-build-page/project-dist', err => {
		copyA()
	}); //создаём папку
	fs.open('./06-build-page/project-dist/style.css', 'w', (err) => {}); //создаем файл
	fs.appendFile('./06-build-page/project-dist/style.css', '', (err) => {}); // чистим файл
	for (let index = 0; index < filterFiles.length; index++) {
		fs.readFile(`./06-build-page/styles/${filterFiles[index]}`, 'utf8', (err, data) => { //читаем файл
			fs.appendFile('./06-build-page/project-dist/style.css', `${data}`, (err) => {}); //записывает файл
		});
	}
});

fs.open('./06-build-page/project-dist/index.html', 'w', (err) => {});
fs.appendFile('./06-build-page/project-dist/index.html', '', (err) => {});
fs.readFile(`./06-build-page/template.html`, 'utf8', (err, data) => { //читаем файл
	fs.appendFile('./06-build-page/project-dist/index.html', `${data}`, (err) => {}); //записывает файл
	fs.readdir('./06-build-page/components/', { //переписывает строки в html файле
		withFileTypes: true
	}, function (err, items) {
		let files = items.filter(item => !item.isDirectory()).map(item => item.name);
		let filterFiles2 = [];
		files.forEach(function (item) {
			filterFiles2.push(item.split('').slice(0, item.length - 5).join(''));
		});
		if (data.indexOf('about') === -1) {
			fs.readFile(`./06-build-page/components/header.html`, 'utf8', (err, data1) => {
				let html1 = data1;
				fs.readFile(`./06-build-page/components/articles.html`, 'utf8', (err, data2) => {
					let html2 = data2;
					fs.readFile(`./06-build-page/components/footer.html`, 'utf8', (err, data3) => {
						let html3 = data3;
						let result1 = data.replace(/{{header}}/g, `${html1}`).replace(/{{articles}}/g, `${html2}`).replace(/{{footer}}/g, `${html3}`);
						fs.writeFile('./06-build-page/project-dist/index.html', result1, 'utf8', function (err) {});
					});
				});
			});
		} else if (data.indexOf('about') !== -1) {
			fs.readFile(`./06-build-page/components/header.html`, 'utf8', (err, data1) => {
				let html1 = data1;
				fs.readFile(`./06-build-page/components/articles.html`, 'utf8', (err, data2) => {
					let html2 = data2;
					fs.readFile(`./06-build-page/components/footer.html`, 'utf8', (err, data3) => {
						let html3 = data3;
						fs.readFile(`./06-build-page/components/about.html`, 'utf8', (err, data4) => {
							let html4 = data4;
							let result2 = data.replace(/{{header}}/g, `${html1}`).replace(/{{articles}}/g, `${html2}`).replace(/{{footer}}/g, `${html3}`).replace(/{{about}}/g, `${html4}`);
							fs.writeFile('./06-build-page/project-dist/index.html', result2, 'utf8', function (err) {});
						});
					});
				});
			});
		}
	});
});

function copyA() {

	fs.mkdir('./06-build-page/project-dist/assets', err => {
		fs.mkdir('./06-build-page/project-dist/assets/fonts', err => {});
		fs.createReadStream('./06-build-page/assets/fonts/Karolina-Regular.woff2').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/fonts/Karolina-Regular.woff2'));

		fs.mkdir('./06-build-page/project-dist/assets/img', err => {});
		fs.createReadStream('./06-build-page/assets/img/footer.jpg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/img/footer.jpg'));
		fs.createReadStream('./06-build-page/assets/img/header.jpg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/img/header.jpg'));
		fs.createReadStream('./06-build-page/assets/img/item1.jpg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/img/item1.jpg'));
		fs.createReadStream('./06-build-page/assets/img/item2.jpg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/img/item2.jpg'));
		fs.createReadStream('./06-build-page/assets/img/item3.jpg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/img/item3.jpg'));
		fs.createReadStream('./06-build-page/assets/img/wildlife-logo.jpg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/img/wildlife-logo.jpg'));

		fs.mkdir('./06-build-page/project-dist/assets/svg', err => {});
		
		fs.createReadStream('./06-build-page/assets/svg/arrow-left.svg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/svg/arrow-left.svg'));
		fs.createReadStream('./06-build-page/assets/svg/arrow-right.svg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/svg/arrow-right.svg'));
		fs.createReadStream('./06-build-page/assets/svg/facebook.svg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/svg/facebook.svg'));
		fs.createReadStream('./06-build-page/assets/svg/instagram.svg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/svg/instagram.svg'));
		fs.createReadStream('./06-build-page/assets/svg/logo.svg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/svg/logo.svg'));
		fs.createReadStream('./06-build-page/assets/svg/pinterest.svg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/svg/pinterest.svg'));
		fs.createReadStream('./06-build-page/assets/svg/search.svg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/svg/search.svg'));
		fs.createReadStream('./06-build-page/assets/svg/telegram.svg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/svg/telegram.svg'));

		fs.readdir('./06-build-page/assets/img', {
			withFileTypes: true
		}, function (err, items) {
			let files = items.filter(item => !item.isDirectory()).map(item => item.name);
			if(files.indexOf('squirrel-2.jpg') !== -1) {
				fs.createReadStream('./06-build-page/assets/img/squirrel-2.jpg').pipe(fs.createWriteStream('./06-build-page/project-dist/assets/img/squirrel-2.jpg'));
			}
		});	
	});
}