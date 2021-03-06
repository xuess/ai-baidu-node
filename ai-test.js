/**
 * 本地音频 语音识别
 * xuess<wuniu2010@126.com>
 * 2017-12-24
 */
var fs = require('fs');
var config = require('./config.js');
var AipSpeechClient = require("./src/index.js").speech;
// 设置APPID/AK/SK
var APP_ID = config.APP_ID;
var API_KEY = config.API_KEY;
var SECRET_KEY = config.SECRET_KEY;

var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);



let voice1 = fs.readFileSync('./audio/16k.pcm');
let voiceBuffer1 = new Buffer(voice1);
// 识别本地文件 pcm 格式
client.recognize(voiceBuffer1, 'pcm', 16000).then(function(result) {
	console.log('<recognize>: ' + JSON.stringify(result));
}, function(err) {
	console.log(err);
});




let voice2 = fs.readFileSync('./audio/16k-23850.amr');
let voiceBuffer2 = new Buffer(voice2);
// 识别本地文件 amr格式
client.recognize(voiceBuffer2, 'amr', 16000).then(function(result) {
	console.log('<recognize>: ' + JSON.stringify(result));
}, function(err) {
	console.log(err);
});




let voice3 = fs.readFileSync('./audio/16k.wav');
let voiceBuffer3 = new Buffer(voice3);
// 识别本地文件 wav格式
client.recognize(voiceBuffer3, 'wav', 16000).then(function(result) {
	console.log('<recognize>: ' + JSON.stringify(result));
}, function(err) {
	console.log(err);
});
