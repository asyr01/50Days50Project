const screens = document.querySelectorAll('.screen');
const choose_insect_btn = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let selected_insect = {};

// Goes second screen
start_btn.addEventListener('click', () => screens[0].classList.add('up'));

// Takes image path and alt attribute of which box is selected at second screen.
choose_insect_btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selected_insect = { src, alt };
    // Goes third screen
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});
