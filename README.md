## What is this about:

I learn about promises long time ago, never dived deeper, so this course looks
promising - [egghead](https://egghead.io/lessons/javascript-create-a-promise-chain-in-javascript-with-promise-prototype-then)

This is my findings!

## Summary

1 [Create a Promise Chain in JavaScript with `Promise.prototype.then()`][1] -
   [src][src1]


three mutually exclusive states a promise can be in: pending, fulfilled, or rejected.
JavaScript Promise object and the Promise.prototype.then() method. We’re gonna look at how to make an HTTP request using the Fetch API and how to asynchronously process the response in a promise chain.

2 [Catch Errors in a JavaScript Promise Chain with `Promise.prototype.catch()`][2] - [src][src2]

The Promise.prototype.then() method accepts two callbacks as parameters, onFulfilled and onRejected:

- If the promise is fulfilled, onFulfilled will be called.
- If the promise is rejected, onRejected will be called.
- If the promise never settles (that is, stays pending forever), neither one will be called.
- If you want to register a handler for rejected promises only, you can use the Promise.prototype.catch() method: .catch(onRejected) behaves the same as .then(undefined, onRejected).

3 [Execute Cleanup Logic in a JavaScript Promise Chain with `Promise.prototype.finally()`][3] - [src][src3]

  The Promise.prototype.finally() method lets you attach a callback to a JavaScript promise that is executed once that promise is settled, whether fulfilled or rejected. It is typically used to perform cleanup logic (such as hiding loading spinners, freeing used resources, …). By using finally(), you don't have to duplicate that cleanup logic in both the promise’s fulfillment and rejection handlers.


4 [Create a Rejected Promise in JavaScript with `Promise.reject()`][4] - [src][src4]

You can use the Promise.reject() method to create a promise that is rejected with the given reason.


5 [Create a Resolved Promise in JavaScript with `Promise.resolve()`][5] - [src][src5]

The Promise.resolve() method returns a Promise object that is resolved with the given value. It can be used to convert “promise-like” objects to native Promise objects: If you pass a thenable (an object with a then() method) to Promise.resolve(), the returned Promise object will eventually adopt the same state.

Note that Promise.resolve() doesn't necessarily return a fulfilled promise. If it receives a thenable that ends up being rejected, the returned Promise object will be rejected as well. Check out [States and Fates][state] for a more detailed explanation.


6 [Create a New Promise in JavaScript with the Promise Constructor][6] - [src][src6]

The Promise constructor is used to create a new Promise object. It receives a single function as a parameter (known as the executor function), which in turn receives the resolve and reject functions as parameters:
```javascript
const promise = new Promise((resolve, reject) => {
  // Perform some operation, then call either resolve() or reject()
});
```
Within the body of the executor function, you can perform any operation — typically, an asynchronous one. You then either call resolve(value) or reject(reason), depending on the outcome of that operation, to fulfill or reject the promise.

Note that the Promise object is rejected if an error is thrown within the body of the executor function. The return value of the executor function is ignored.

7 [Convert a Callback-Based JavaScript Function to a Promise-Based One][7] - [src][src7]

Sometimes, you might want to convert a JavaScript function that accepts a callback to one that returns a Promise object. This lesson shows how to manually wrap a promise-based API around the fs.readFile() function. It also explains how to use the util.promisify() method that is built into the Node.js standard library.


8 [Wait for the Fastest JavaScript Promise to Settle with `Promise.race()`][8] - [src][src8]

The Promise.race() method accepts an array (or any other iterable) of promises as a parameter. It returns a Promise object that is fulfilled or rejected once the first input promise is fulfilled or rejected:

As soon as any input promise is fulfilled, the returned Promise object is fulfilled with that value.
As soon as any input promise is rejected, the returned Promise object is rejected with that reason.
Promise.race() can be used to race multiple promises against each other and find the first promise to settle.

9 [Wait for Multiple JavaScript Promises to Settle with `Promise.all()`][9] - [src][src9]

The Promise.all() method accepts an array (or any other iterable) of promises as a parameter. It returns a Promise object that is fulfilled if all of the input promises are fulfilled or rejected if any of the input promises is rejected:

If all input promises are fulfilled, the returned Promise object is fulfilled with an array of fulfillment values of all promises (in the same order as the promises passed to Promise.all()).
If any input promise is rejected, the returned Promise object is rejected with that reason.

10 [Await a JavaScript Promise in an async Function with the `await` Operator][10] - [src][src10]

The await operator is used to wait for a promise to settle. It pauses the execution of an async function until the promise is either fulfilled or rejected.

To learn more about async and await, check out my Asynchronous JavaScript with async/await course.


[state]: https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md

[1]: https://egghead.io/lessons/javascript-create-a-promise-chain-in-javascript-with-promise-prototype-then
[src1]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/01-then

[2]: https://egghead.io/lessons/javascript-catch-errors-in-a-javascript-promise-chain-with-promise-prototype-catch
[src2]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/02-catch

[3]: https://egghead.io/lessons/javascript-execute-cleanup-logic-in-a-javascript-promise-chain-with-promise-prototype-finally
[src3]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/03-finally

[4]: https://egghead.io/lessons/javascript-create-a-rejected-promise-in-javascript-with-promise-reject
[src4]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/04-reject

[5]: https://egghead.io/lessons/javascript-create-a-resolved-promise-in-javascript-with-promise-resolve
[src5]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/05-resolve

[6]: https://egghead.io/lessons/javascript-create-a-new-promise-in-javascript-with-the-promise-constructor
[src6]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/06-constructor

[7]: https://egghead.io/lessons/javascript-convert-a-callback-based-javascript-function-to-a-promise-based-one
[src7]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/07-promisify

[8]: https://egghead.io/lessons/javascript-wait-for-the-fastest-javascript-promise-to-settle-with-promise-race
[src8]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/08-race

[9]: https://egghead.io/lessons/javascript-wait-for-multiple-javascript-promises-to-settle-with-promise-all
[src9]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/09-all

[10]: https://egghead.io/lessons/javascript-await-a-javascript-promise-in-an-async-function-with-the-await-operator
[src10]: https://github.com/mariusschulz/egghead-javascript-promises/tree/master/10-await

