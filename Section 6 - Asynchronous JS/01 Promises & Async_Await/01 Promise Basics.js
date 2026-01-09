/*
What is a Promise?
A Promise is a JavaScript object that represents the result of an asynchronous operation.

A Promise has 3 states:
1. pending - still running
2. fulfilled - completed successfully
3. rejected - failed
*/

// let final = true;
let final = false;

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
  if (!final) {
    reject("Error: Operation failed.");
    return;
  }
    resolve("Success!");
  }, 1000);
});

p.then(value => console.log(value))
 .catch(err => {
  console.error("Handling error:");
  console.error(err)
})
 
 .finally(() => console.log("Promise settled."));

 /*
# 1. Creating a Promise
A Promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject.
=======================================================================
# 2. Promise.then()
Used to handle success.

p.then(result => console.log(result));
=======================================================================
# 3. Promise.catch()
Used to handle errors.

p.catch(err => console.error(err));
=======================================================================
# 4. Promise.finally()
Always runs - whether the promise resolves or rejects.
Great for cleanup tasks.

fetch("/api")
.finally(() => console.log("Done loading!"));

fetch("/api") starts an HTTP request to /api
It immediately returns a Promise (it does NOT wait for the network)

That Promise will:
resolve if the request succeeds (even if response is 404 or 500)
reject only on network failure (like no internet, DNS error)

fetch("/api")
  .then(res => res.json())       // success
  .catch(err => console.error(err)) // error
  .finally(() => console.log("Done loading!")); // always
=======================================================================
# 5. Promise.resolve()
Creates an already resolved promise.
Used to convert any value → promise.

Promise.resolve(10).then(console.log); // 10
=======================================================================
# 6. Promise.reject()
Creates an already rejected promise.

Promise.reject("Error!").catch(console.log);
*/