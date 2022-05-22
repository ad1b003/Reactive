"use strict";

// colours bucket
const colors = ['black', 'blue', 'fuchsia', 'green', 'lime', 'navy', 'orange', 'purple', 'red', 'redorange'];

let input = document.querySelector('input'); // input
let out = document.getElementById('name'); // output

input.addEventListener('input', function () {
  out.innerText = input.value;
  // randomize function
  out.style.color = colors[Math.floor(Math.random() * colors.length)];
});