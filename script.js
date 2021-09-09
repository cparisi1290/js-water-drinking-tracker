const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
  //   console.log(idx);

  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  // console.log(idx);

  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
}
