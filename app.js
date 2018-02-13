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


module.exports = {
  add,
  subtract,
  positiveOrNegative
}
