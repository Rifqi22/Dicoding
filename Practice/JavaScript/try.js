const sum = (a, b) =>{
    return a + b
}
const result = sum(4,4)
console.log(result);

const subtract = (a, ...b) => {
    let result = 0;
    if (a < b){
        result = b - a;
    } else {
        result = a - b;
    }
    return result;
}
 
const trySubtract = subtract(4, 2);
console.log(trySubtract);
console.log("Hello");