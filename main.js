function flipAndReverse(str) {
  const charMap = {
    "a": "\u0250",
    "b": "q",
    "c": "\u0254",
    "d": "p",
    "e": "\u01DD",
    "f": "\u025F",
    "g": "\u0183",
    "h": "\u0265",
    "i": "\u0131",
    "j": "\u027E",
    "k": "\u029E",
    "l": "\u05DF",
    "m": "\u026F",
    "n": "u",
    "o": "o",
    "p": "d",
    "q": "b",
    "r": "\u0279",
    "s": "s",
    "t": "\u0287",
    "u": "n",
    "v": "\u028C",
    "w": "\u028D",
    "x": "x",
    "y": "\u028E",
    "z": "z",
    " ": " "
  };
  
  let flippedChars = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str.charAt(i);
    const flippedChar = charMap[char] || char;
    flippedChars += flippedChar;
  }
  
  return flippedChars;
}
const flippedString = flipAndReverse("Chaos");
console.log(flippedString);

