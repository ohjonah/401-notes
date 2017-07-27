# Vanilla REST API

#### Promises
If my number is larger than 100, error, otherwise, give me the number. We are wrapping it with a Promise constructor.
Return a Promise. THEN you handle a promise.
If a Promise resolves, it goes to the THEN block. If not, it goes to the Error block.

```js
function bigNumber(num) {
  return new Promise((resolve, reject) => {
    if (num < 100) {
      reject(new Error('expected a big number'));
    }

    if (num > 100) {
      return resolve(num);
    }
  });
}

function success(result) {
  console.log('result:', result);
}

function throwError(error) {
  console.log('error:', error);
}

bigNumber(200);
bigNumber(40);
bigNumber.then(success);
bigNumber.then(success).catch(throwError);
```

# Build
- parse-json.js: middleware
- parse-url.js: extracting the url property
- router: router constructer. takes route and mounted to a specific resource
- storage: mimics the way that saves to mongodb

# Build Order
* parse-json.js
* parse-url.js
* router.js
* storage.js
* note.js
* server.js
* test.js