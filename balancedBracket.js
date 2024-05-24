console.log(balancedBracket("{[()]}"));
console.log(balancedBracket("{[(])}"));
console.log(balancedBracket("{(([])[])[]}"));

function balancedBracket (values) {
    const array = [];
    const matchs = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    for (let value of values) {
        if (value in matchs) {
            array.push(value);
        } else {
            if (array.length === 0) {
                return 'NO';
            }
            let top = array.pop();
            if (matchs[top] !== value) {
                return 'NO';
            }
        }
    }

    return array.length === 0 ? 'YES' : 'NO';
}
