let count = 0;
const button = document.querySelector('button');
const text = document.getElementById('text');
button.addEventListener('click', () => {
  ++count;
  text.innerText = "You've clicked";
  button.innerText = `${count} ${count > 1 ? 'times' : 'time'}`;
});