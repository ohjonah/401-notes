# Tools and Context

# Dependency Management

Add a package.json file:
```sh
npm i -y
```
Using the package.json file:
- name
- version
- main: defaults to index.js or server.js
- scripts: allows you to automate scripts like lint, testing, etc

Add dependencies:
*this adds an express module*
```sh
npm i -S express
```

Add Node Modules with Existing package.json File
```sh
npm i
```

Remove Dependencies from package.json
```sh
npm uninstall -S mocha chai
```

Add Dependencies to Dev Dependencies
```sh
npm i -D mocha chai
```

# NPM Scripts
package.json:
```sh
...{
  "name": "test-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "mocha",
    "lint": ".eslint ."
  }...
```

When modifying 'scripts',
*npm run **KEYWORD***
```sh
npm run start
npm run test
npm run lin
```

# Exploring Context
no context, so it logs window:
```js
function faker() {
  console.log('current context', this);
}
```
# Demos
#### call-demo.js
#### apply-demo.js
#### call-with-instantiation.js
#### fp-methods.js

# Assertion Testing w/ Chai JS
using human readable language (BDD) to chain together assertion methods

require chai but DO NOT const = 'expect', but rather '.expect';
```js
const expect = require('chai').expect;
```

# Assignment Prep
see demo file: fp-methods.js
