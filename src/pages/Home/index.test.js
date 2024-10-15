import { sum } from "./"


test('My sum function', () => {
    const result = sum(3, 7)
    expect(result).toBe(10)
})