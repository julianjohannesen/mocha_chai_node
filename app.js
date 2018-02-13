function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function positiveOrNegative(num) {
  if (num > 0) {
    return "positive"
  } else {
    return "negative"
  }
}

//"module.exports" is required to expose these functions and allow them to be required in other files
//http://www.tutorialsteacher.com/nodejs/nodejs-module-exports
module.exports = {
  add,
  subtract,
  positiveOrNegative
}
