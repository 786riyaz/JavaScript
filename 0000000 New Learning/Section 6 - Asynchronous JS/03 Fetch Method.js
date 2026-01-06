fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    // console.log(res);
    console.log(res.ok);
    console.log(res.status);
    return res.json(); // read body ONCE
  })
  .then((data) => {
    console.log(data);        // full object
    console.log(data.name);   // "Leanne Graham"
  });
