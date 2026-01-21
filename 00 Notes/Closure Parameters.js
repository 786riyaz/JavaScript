// Pass by Reference
function example() {
  let message = "Hello";

  setTimeout(function () {
    console.log(message);
  }, 1000);

  message = "w";
}

example();

// Pass by Value
/*
function example() {
  let message = "Hello";
  const captured = message;

  setTimeout(() => {
    console.log(captured);
  }, 1000);

  message = "w";
}


function example() {
  let message = "Hello";

  setTimeout((msg) => {
    console.log(msg);
  }, 1000, message);

  message = "w";
}

*/