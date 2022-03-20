/*
Given an array containing the alphanumeric alphabet, write code that returns an array that:

* Removes the numbers 0-9 from the beginning of the alphabet
* Removes the ampersand (&) from the end of the alphabet
* Adds a "ch" between "c" and "d"
* Adds an "ñ" between "n" and "o"
* Adds an "ll" between "l" and "m"

*/

function getSpanishAlphabet(){
  const alphaNumericAlphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "&"];
  let spanishAlphabet = Array();

   // Shift 0-9
   for(let i = 0; i >= 9; i++){
    alphaNumericAlphabet.shift();}

  //remove ampersand
  alphaNumericAlphabet.pop();

  //add abc to spanish alphabet
  const aIndex = alphaNumericAlphabet.indexOf("a");
  const cIndex = alphaNumericAlphabet.indexOf("c");
  for(let i = aIndex; i <= cIndex; i++){
    spanishAlphabet.push(alphaNumericAlphabet[i]);
  }
  // ad "ch" after "c"
  spanishAlphabet.push("ch");

  // add d thru l
  const dIndex = alphaNumericAlphabet.indexOf("d");
  const lIndex = alphaNumericAlphabet.indexOf("l");
  for(let i = dIndex; i <= lIndex; i++){
    spanishAlphabet.push(alphaNumericAlphabet[i])}

  spanishAlphabet.push("ll");

//add m thru m
  const mIndex = alphaNumericAlphabet.indexOf("m");
  const nIndex = alphaNumericAlphabet.indexOf("n");
  for(let i = mIndex; i <= nIndex; i++){
    spanishAlphabet.push(alphaNumericAlphabet[i])}

  spanishAlphabet.push("ñ");

  //add the rest
  const oIndex = alphaNumericAlphabet.indexOf("o");
  for(let i = oIndex; i < alphaNumericAlphabet.length; i++){
    spanishAlphabet.push(alphaNumericAlphabet[i])}
    
  return spanishAlphabet
}
module.exports = getSpanishAlphabet

/*
You can run tests for this code to check your answers by running `npm run test-3`
*/

/*
 */