const getAlphaNumericAlphabet = require("../2")

describe("Exercise 2", () => {
  it("returns a full alphanumeric alphabet", () => {
    const alphaNumericAlphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "&"]
    expect(getAlphaNumericAlphabet()).toEqual(alphaNumericAlphabet)
  })
})
