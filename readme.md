# is-mkv [![Build Status](https://travis-ci.org/T1st3/is-mkv.svg?branch=master)](https://travis-ci.org/T1st3/is-mkv)

> Check if a Buffer/Uint8Array is a [MKV](https://en.wikipedia.org/wiki/Matroska) video


## Install

```sh
$ npm install --save is-mkv
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isMkv = require('is-mkv');
var buffer = readChunk.sync('unicorn.mkv', 0, 39);

isMkv(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.mkv');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isMkv(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isMkv(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 39 bytes.


## License

MIT © [T1st3](http://www.tiste.org)
