const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject("Failed 2");
const p3 = new Promise(res => setTimeout(() => res("Success 3"), 1000));

Promise.allSettled([p1, p2, p3]).then(result => {
  console.log(result);
});

/*
[
  { status: 'fulfilled', value: 'Success 1' },
  { status: 'rejected', reason: 'Failed 2' },
  { status: 'fulfilled', value: 'Success 3' }
]
  */