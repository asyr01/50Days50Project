const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function runAnimation() {
  nums.forEach((num, i) => {
    const nextToLast = nums.length - 1;
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && i !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      }
    });
  });
}
