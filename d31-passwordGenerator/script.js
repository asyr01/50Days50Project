// Gives a random lower-letter from ASCII Table 97-122
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Gives a random upper-letter from ASCII Table 65-90
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Gives a random number from ASCII Table 48-57
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Get a random symbol from the string
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,"+';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());
