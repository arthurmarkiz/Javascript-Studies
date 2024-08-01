/* Two essential parts of a recursive function...
- Base Case 
- Different Input */

const countDown = (number) => {
    if (number <= 0) return console.log('All done!');
    console.log(number);
    countDown(number - 1);
}
// countDown(10);
// -------------------------------------------
const sumInRange = (number) => {
    if (number === 1) return 1;
    return number + sumInRange(number - 1);
};
// console.log(sumInRange(3))
// -------------------------------------------
const factorial = (number) => {
    if (number === 1) return 1;
    return number * factorial(number - 1);
};
// console.log(factorial(4));
// -------------------------------------------
// HELPER METHOD RECURSION
const outer = (input) => {
    let outerScopedVariable = [];
    const helper = (helperInput) => {
        // Modify the outerScopedVariable
        helper(helperInput--)
    }
    helperInput(input);
    return outerScopedVariable;
};
// -------------------------------------------
// e.g: collect all of the odd values in an array.
// With Helper Method Recursion
const collectAllOddValues = (arr) => {
    let result = [];

    const helper = (helperInput) => {
        if (helperInput.length === 0) return;
        if (helperInput[0] % 2 !== 0)
            result.push(helperInput[0]);
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
};
// console.log(collectAllOddValues([1,2,3,4,5,6,7,8,9,10]))
// -------------------------------------------
// With Pure Recursion
const collectAllOddValuesPure = (arr) => {
    let newArr = [];

    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectAllOddValuesPure(arr.slice(1)));
    return newArr;
};
// console.log(collectAllOddValues([1,2,3,4,5,6,7,8,9,10]))