Method then accepts 2 arguments, onFullfiled, and onRejected both functions

I love how when you throw error in the onFullfiled callback you'll end up in
catch clause. Grate example is checking status code of http request and based on
that reject the promise

```
  if(!res.on) {
    throw new Error('Operation unsucessufufl')
    vs
    return Promise.reject(new Error('Operation unsucessufufl'))
    vs 
    return Promise.rject("Operation unsucessufufl")
  }
```

On the first sight, first 2 of sintax variation gives the same benefits of stack
trace, as oppose the third that provide you with only string.

On the more deeper look, I prefere Promise.rejection with new Error, with
benefit of better working with `async` functions, depending on how you write
async functions, you would end up in nearest try/catch block.


Use finally to clean up, interestingly you can continue to chain after finally,
and whatever '.catch' returns (implicitly undefined) .finally is going to have
it in arguments.


new Promise()

- one function as argument
- comunicate outside with reject/resolve
- can't use return
- if throw err it will end up as rejected

