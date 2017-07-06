let letters = [];
const DIMENSION = 300;

function checkBounds() {
  let offset = false;
  while (container.offsetHeight > DIMENSION) {
    container.removeChild(container.children[container.children.length - 1]);
    offset = true;
  }
  return offset;
}

function fillLetter() {
  let letter = document.createElement('span');
  letter.style.top = '0';
  letter.style.left = (Math.random() * DIMENSION) + 'px';
  if (Math.random() < 0.8) {
    letter.textContent = String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 26));
  } else {
    letter.textContent = ' ';
  }
  letter.style.opacity = Math.random() / 2 + 0.3;
  container.insertBefore(letter, container.firstChild);
  return checkBounds();
}

function fillContainer() {
  while (!fillLetter()) {}
}

const container = document.getElementById('container');

fillContainer();

setInterval(() => {
  fillLetter();
}, 100);
