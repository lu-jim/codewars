/* Description:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  //Code here
  const wordArray = str.split([' ']);

  const pigLatin = wordArray.map(word =>{
    if(word.match(/[A-Z|a-z|ü|é]/i) ) {
    const currentWord = word.split('');
    const firstLetter = currentWord.shift();
    return currentWord.join('') + firstLetter +'ay'}
    else return word
  })
  return(pigLatin.join(' '))
}
const example1 = 'Pig ! latin is cool';
const example2 = 'This is my string!'
pigIt(example1)