let inputString = "abbcccd";
let inputArray = [1, 3, 9, 8];
let output = weightedStrings(inputString, inputArray);
console.log(output);

function calculate (value) {
    let weights = {};
    let currentIndex = 0;
    while ( currentIndex < value.length ) {
        let nextIndex = currentIndex + 1;
        while ( nextIndex < value.length && value[nextIndex] === value[currentIndex]) {
            nextIndex++;
        }
        for (let index = currentIndex; index < nextIndex; index++) {
            let substring = value.substring(currentIndex, index + 1);
            let weight = (value.charCodeAt(currentIndex) - 'a'.charCodeAt(0) + 1) * (index - currentIndex + 1);
            weights[substring] = weight;
        }
        currentIndex = nextIndex;
    }
    return weights;
}

function weightedStrings (value, array) {
    let weights = calculate(value);
    let results = [];
    for (let arr of array) {
        if (Object.values(weights).includes(arr)) {
            results.push("Yes");
        } else {
            results.push("No");
        }
    }
    return results;
}

