const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

// To get images -each row includes three images- and insert them to DOM
for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

// Get different size images
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

// Get random number to get different size images
function getRandomNr() {
  return Math.floor(Math.random() * 10 + 300);
}
