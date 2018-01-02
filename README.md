## 项目简介

>本项目主要功能为，本地音频`语音识别`和文件类型转换(利用`fluent-ffmpeg`)
>
> `config.js` 里面的应用Id，请替换成自己在百度应用里申请的。出于测试方便，我就不删除了。

#### 1.工程依赖安装，如果想测试音频类型转换，需要安装 `ffmpeg`

```bash
npm i
```

安装ffmpeg MAC直接 下面命令，其他自行百度吧

``` 
brew install ffmpeg
```


#### 2.运行测试

```
语音识别
node ai-test.js

音频文件类型转换
node audio-change-ext.js
```


>关于百度语音识别,更多功能请看官方api