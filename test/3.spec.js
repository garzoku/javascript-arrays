const getSpanishAlphabet = require("../3")

describe("Exercise 3", () => {
  it("returns the Spanish alphabet", () => {
    const spanishAlphabet = ["a", "b", "c", "ch", "d", "e", "f", "g", "h", "i", "j", "k", "l", "ll", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    expect(getSpanishAlphabet()).toEqual(spanishAlphabet)
  })
})
