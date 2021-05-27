const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, i) => {
  cup.addEventListener('click', () => {
    highlightCups(i);
  });
});

function highlightCups(i) {
  //toggle the last cup.
  if (
    smallCups[i].classList.contains('full') &&
    !smallCups[i].nextElementSibling.classList.contains('full')
  ) {
    i--;
  }
  // fill the cups
  smallCups.forEach((cup, i2) => {
    if (i2 <= i) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
}
