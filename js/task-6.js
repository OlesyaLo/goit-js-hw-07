const input = document.querySelector('input');
const dataCreateBtn = document.querySelector('button[data-create]');
const dataDestroyBtn = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

dataCreateBtn.addEventListener('click', OnCreateClick);
dataDestroyBtn.addEventListener('click', OnDestroyClick);

function OnCreateClick() {
  let amount = input.value;
  if (amount < 1 || amount > 100) {
    return alert('Please enter the correct amount between 1 and 100');
  }
  OnDestroyClick();
  createBoxes(amount);
}

function OnDestroyClick() {
  divBoxes.innerHTML = '';
  input.value = '';
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    let box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    divBoxes.append(box);
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
