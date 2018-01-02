/**
 * 音频格式转换
 * xuess<wuniu2010@126.com>
 * 2017-12-24
 */

var ffmpeg = require('fluent-ffmpeg');

ffmpeg('./audio/content.mp3')
	.on('end', function() {
		console.log('file has been converted succesfully');
	})
	.on('error', function(err) {
		console.log('an error happened: ' + err.message);
	})
	.save('./audio/output/change-wav.wav');