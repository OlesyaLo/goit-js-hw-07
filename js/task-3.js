const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const textName = event.target.value.trim();
  textOutput.textContent = textName !== '' ? textName : 'Anonymous';
});
