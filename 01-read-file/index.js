const path = require('path');
const fs = require('fs');
let file = path.join(__dirname, 'text.txt');
let stream = new fs.ReadStream(file, {encoding: 'utf-8'});

stream.on('readable', function () {
	let data = stream.read();
	if(data != null)console.log(data);
});