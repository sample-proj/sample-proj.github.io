let letters = [];
const width = 300;

setInterval(() => {
  let letter = document.createElement('div');
  letter.style.top = '0';
  letter.style.left = (Math.random() * 300) + 'px';
  letter.textContent = String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 26));
  document.body.appendChild(letter);
}, 10);