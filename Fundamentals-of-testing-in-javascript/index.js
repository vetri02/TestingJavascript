const sum = (a, b) => a - b
const subtract = (a, b) => a - b

let result = sum(2,3)
let expected = 5

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(5,2)
expected = 3
if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}
