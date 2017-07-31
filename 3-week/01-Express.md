# Express

Layer of Dependencies in how it Runs and Logs
- npm i -S
  - express: server routing
  - bluebird: promise library
  - body-parser: parses body
  - debug: allows dev to toggle console.log
  - http-errors: throws error and status codes
  - morgan: meta info about request
  - uuid: universal unique ids


SYNTAX: app:module
```js
const debug = require('debug')('note:server');

```