/*
Given an array containing the english alphabet, write code that returns an array containing:

* The numbers 0-9 at the beginning of the alphabet (as numbers, not strings)
* An ampersand (&) at the end of the alphabet

*/

function getAlphaNumericAlphabet(){
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let alphaNumericAlphabet = Array();
  let numericList = Array();

  // Your code here
  // Build an array of 0-9
  for(let i = 0; i < 10; i++){
    numericList.push(i);
  } 
  //add alphabet onto the end of 0-9 array
  alphaNumericAlphabet = [...numericList, ...alphabet]

  //add an amersand to the end
  alphaNumericAlphabet.push("&");

  return alphaNumericAlphabet
}

module.exports = getAlphaNumericAlphabet

/*
You can run tests for this code to check your answers by running `npm run test-2`
*/
