const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');

const text = 'We love programming';

// index to increase text when inserted, speed for typing effect 600 could be any value.
let idx = 1;
let speed = 600 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  // Repeat the effect
  if (idx > text.length) {
    idx = 1;
  }
  // Recursive
  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});
