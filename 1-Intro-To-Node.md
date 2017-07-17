# 401 JS


# WTF is Node JS
 - allows us to build javascript applications through a framework
 - uses a single threaded, event driven, i/o architecture
 - Event loop adds to the callback queue, which handles i/o asynchronously at the OS level

# Modular Patterns in Node JS
Specific ways to handle concepts of modularity in Node JS
- Node has a global object: 'this' will return framework of Node
- *require* can grab
Node objects - ex. const var = require('express')
  - uses Asynchronous Module Definition (AMD)

# Demos
## 1-hello-world
access the Node repl:
```sh
node
```

access the global object on Node:
```sh
this
```

run the file using Node:
```sh
node index.js
```

## 1-hello-world-modularized
Every module that is a helper module lives in the lib directory. Use module.exports to call it in another file

module.exports as a single function:
```js
module.exports = function() {
  console.log('hey world!');
};
```

require pulls in a module defined by the module.exports function:
```js
const hello = require('./lib/hello.js');
```

## 1-hello-world-module-methods

# Intro to Testing w/ Mocha


# Assignment Prep/Workflow Discussion
