const getAlphaNumericAlphabet = require("../2")

describe("Exercise 3", () => {
  it("transforms the alphabet into an array of vowels", () => {
    const spanishAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    expect(getSpanishAlphabet()).toEqual(spanishAlphabet)
  })
})