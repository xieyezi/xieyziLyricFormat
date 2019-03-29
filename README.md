### 说在前面

![](https://img.shields.io/badge/rollup-v1.7.3-green.svg)       ![](https://img.shields.io/badge/npm-6.4.1-green.svg)

传入字符串类型歌词，按照正则表达式解析，解析的数据结构为：
```js
{
txt:歌词，
time:ms
}
```


#### 安装

```js
npm install xieyezi-lyric
```
#### 用法

```js
import xieyeziLyric form 'xieyezi-lyric';
```

```js
 var Lyric = new Lyric(lyric,handle);
 console.log(Lyric);
//支持传入一个处理函数“handle”
```

```js
//js里面的handle函数
_callHandler(i) {
if (i < 0) {
    return;
}
this.handler({
    txt: this.lines[i].txt,
    lineNum: i
})
}

```









