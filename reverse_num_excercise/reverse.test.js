const reverse_number = require('./reverse.js')

describe("first test", () => {
    it("should reverse a number 32243", () => {
        const result = reverse_number("32243");
        expect(result).toEqual("34223")
    })

    it("should reverse a long number 444555666777888", () => {
        const result = reverse_number("444555666777888");
        expect(result).toBe("888777666555444")
    })

    it("should reverse a double digit number with spaces", () => {
        const result = reverse_number("10 12 14 16 17");
        expect(result).toEqual("71 61 41 21 01")
    })


})