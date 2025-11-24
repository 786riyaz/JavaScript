/*
Promise.all()

Runs promises in parallel.

→ Resolves only when ALL succeed
→ Rejects when ANY ONE fails

Uses:
* Fastest results from parallel tasks
* Webpage data load
* Multiple API calls

Promise.all([
    fetch("/users"),
    fetch("/posts"),
])
.then(() => console.log("All done"))
.catch(() => console.log("One failed!"));           // Here both are failed requests
*/

// let final = true;
let final = false;

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!final) {
        // return resolve(Promise.reject("User fetch failed"));
        return reject("User fetch failed");
      }
      resolve({ id: 1, name: "Riyaz Khan" });
    }, 2000);
  });
}

function fetchOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!final) {
        return reject("Orders fetch failed");
      }
      resolve([
        { orderId: 101, product: "Laptop" },
        { orderId: 102, product: "Keyboard" },
      ]);
    }, 3000);
  });
}

Promise.all([fetchUser(), fetchOrders()])
  .then(([user, orders]) => {
    console.log("User:", user);
    console.log("Orders:", orders);
    console.log("Dashboard loaded!");
  })
  .catch((err) => {
    console.log("Something failed:", err);
  });
