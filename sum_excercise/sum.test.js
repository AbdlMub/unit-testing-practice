const sum = require("./sum")


// Postive Test scenario
it("should add 1 + 2 to equal 3", () => {
    const result = sum(1,2);
    expect(result).toBe(3)
});

// // Negative test scenario
// it("should sum 2 + 22 and not be equal to 222", () +> {
//     expect(sum(2, 22)).not.toBe(222);
// });

