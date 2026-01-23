let input;
input = [ [ 'a', 1 ], [ 'b', 2 ] ];
input = { a: 1, b: 2 };

function convert(input) {
  if (Array.isArray(input)) {
    return arrayToObject(input);
  } else {
    return objectToArray(input);
  }
}

function arrayToObject(input) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    let pair = input[i];
    let key = pair[0];
    let value = pair[1];
    result[key] = value;
  }
  return result;
}

function objectToArray(input) {
  let result = [];
  for (let key in input) {
    result.push([key, input[key]]);
  }
  return result;
}

let output = convert(input);
console.log(output);