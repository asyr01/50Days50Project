const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const input = document.querySelector('#input');

const text = 'We love programming';

// index to increase text when inserted, speed for typing effect 600 could be any value.
let idx = 1;
let speed = 600 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  // Repeat the text
  if (idx > text.length) {
    idx = 1;
  }
  // Recursive function
  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 600 / e.target.value;
});
