const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 36;
const colors = ['red','blue','purple','olive','brown','gold'];

const increase = () => {
  if(fontSize < 72) {
    fontSize += 2;
    p.style.fontSize = `${fontSize}px`;
  }
}

const decrease = () => {
  if(fontSize > 14) {
    fontSize -= 2;
    p.style.fontSize = `${fontSize}px`;
  }
}

const changeColor = () => {
  randomColor = colors[Math.floor(Math.random() * colors.length)]
  if(p.style.color === randomColor) {
    randomColor = colors[Math.floor(Math.random() * colors.length)]
  } else {
    p.style.color = `${randomColor}`;
  }
}

sizeUp.addEventListener('click', increase);
sizeDown.addEventListener('click', decrease);
colorBtn.addEventListener('click', changeColor);