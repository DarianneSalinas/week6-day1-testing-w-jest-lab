let myFunctions = require('./functions')

test("return two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("greeting test", () => {
    expect(myFunctions.greeting('James')).toBe('Hello, James')
})

test("addition test", () => {
    expect(myFunctions.add(1,2)).toBe(3)
})

test("multiplication test", () => {
    expect(myFunctions.multiply(3,8)).toBe(24)
})

test("subtraction test", () => {
    expect(myFunctions.subtract(24,9)).toBe(15)
})