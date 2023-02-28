const check_Palindrome = require('./palindrome')

describe("basic tests", () => {
    it("should be a palindrome", () => {
        const result = check_Palindrome('madam');
        expect(result).toEqual(true)
    })

    it("should be non-palindrome", () => {
        const result = check_Palindrome('fox');
        expect(result).toEqual(false)
    })

    it("should be a palindrome with 2 words", () => {
        const result = check_Palindrome('nurses run');
        expect(result).toEqual(true)
    })


})