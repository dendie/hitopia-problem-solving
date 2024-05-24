function isPalindrome(string, k) {
    const arrayLength = string.length;
    let arrayNumbers = string;
    
    if (arrayLength === 0 || k < 0) {
        return arrayNumbers;
    }

    if (arrayLength === 1) {
        return arrayNumbers;
    }

    if (arrayNumbers[0] !== arrayNumbers[arrayLength - 1]) {
        if (arrayNumbers[0] > arrayNumbers[arrayLength - 1]) {
            arrayNumbers[arrayLength - 1] = arrayNumbers[0]
        } else {
            arrayNumbers[0] = arrayNumbers[arrayLength - 1]
        }
        k--;
    }
    return isPalindrome(string.substring(1, arrayLength - 1), k) + arrayNumbers[0];
}

function highestPalindrome(string, k) {
    let palindrome = isPalindrome(string, k);
    let finalPalindrome = palindrome.split("").reverse().join("") + palindrome;
    return parseInt(finalPalindrome);
}

console.log(highestPalindrome("3943", 1));