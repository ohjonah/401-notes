# Async and File System i/o

Organizing Your Node Code:
- native node modules, i.e. fs et. al
- npm modules, i.e. express et. al
- custom app modules, i.e. greet.js et. al
- module constant, i.e. port
- module logic, e.g. the code

# Callbacks
#### callback-demo.js
Node uses an error-first callback pattern.

Process:
1. I need to do this thing, I need some data.
2. I call out for data.
3. If it doesn't work and I don't get what I expect, throw an error in node.

# Working with Buffers
Buffer is binary representation of data. We use buffers to pass around information. Very important for File System (FS) i/o.

Use the readFile method on the fs constructor, and when you have that data, log that data:
```js
fs.readFile('./data/text.txt', function(data) {
  console.log(data);
});
```
Comes back as 'Buffer 6f dd 30 d1...'

To convert it back to a string:
```js
fs.readFile('./data/text.txt', function(data) {
  console.log(data.toString());
});
```

#### Buffer Demo in REPL:
```js
var str = 'some cool string';
var buff = new Buffer(str);
buff
```

Output:
```sh
<Buffer 73 6f 6d 65 20 63 6f 6f 6c 20 73 74 72 69 6e 67>
```

Conversion Chart:
```sh
man ascii
```

#### Buffer .toString() Demo in REPL:
```js
var str = 'another cool string';
var buff = new Buffer(str);
buff.toString();
buff.toString('hex');
buff.toString('base64');
```

Output:
```sh
'another cool string'
'616e6f7468657220636f6f6c20737472696e67'
'YW5vdGhlciBjb29sIHN0cmluZw=='
```

# File System i/o
#### ./read-file-demo
#### ./write-file-demo
#### ./read-file-test

Fills out an absolute path with ```sh__dirname```:

```js
fs.readFile(`${__dirname}/data/data.txt`);
```

Helpful Tip: Build a wrapper to make it testable (like in read-file-test demo)

# Assignment Prep
