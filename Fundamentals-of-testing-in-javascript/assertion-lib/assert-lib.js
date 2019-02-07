const { sum, subtract } = require('./math');


test('Sum adds numbers', () => {
    const result = sum(2, 3)
    const expected = 5

    expect(result).toBe(expected)
})


test('Subtract subtracts numbers', () => {
    const result = subtract(5, 2)
    const expected = 3
    expect(result).toBe(expected)
})


function test(title, callback) {
    try {
        
        callback()
        console.log(`✓ ${title}`)
    } catch (error) {
        console.error(`✕ ${title}`)
        console.error(error)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal tp ${expected}`)
            }
        }
    }
}