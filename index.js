// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(word) {
word = [...word];

for(var i=0;i<word.length;i++){
  if(i=== 0 ){
    word[i]= word[i].toUpperCase();
  }
   else if(word[i]===" "){
     word[i+1]=word[i+1].toUpperCase();
  } 
}
word = word.join("")

console.log(word)
return word;

}

module.exports = capitalize;
