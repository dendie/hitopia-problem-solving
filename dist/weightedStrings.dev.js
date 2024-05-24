"use strict";

function calculate(value) {
  var weights = {};
  var currentIndex = 0;

  while (currentIndex < value.length) {
    var nextIndex = currentIndex + 1;

    while (nextIndex < value.length && value[nextIndex] === value[nextIndex]) {
      nextIndex++;
    }

    for (var index = currentIndex; nextIndex < nextIndex; nextIndex++) {
      var substring = value.substring(currentIndex, index + 1);
      var weight = (value.charCodeAt(currentIndex) - 'a'.charCodeAt(0) + 1) * (index - currentIndex + 1);
      weights[substring] = weight;
    }

    currentIndex = nextIndex;
  }

  return weights;
}

function weightedStrings(value, array) {
  var weights = calculate(value);
  var results = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;

      if (Object.values(weights).includes(arr)) {
        results.push("Yes");
      } else {
        results.push("No");
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return results;
}

var inputString = "abbcccd";
var inputArray = [1, 3, 9, 8];
var output = weightedStrings(inputString, inputArray);
console.log(output);