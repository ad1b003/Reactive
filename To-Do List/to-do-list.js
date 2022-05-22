"use strict";

function capitalizeFirstLetter(x) {
  let firstLetter = x.charAt(0);
  return x.replace(firstLetter, firstLetter.toUpperCase())
}

//create new element with attributes
function newElement(tag, attr, text = "", content = "", parent = "") {
  let el = document.createElement(tag);
  //setting up attributes
  attr.forEach(tuple => {
    el.setAttribute(tuple[0], tuple[1]);
  });
  //text
  if (text != "") {
    el.textContent = text;
  }
  //other HTML element
  if (content != "") {
    content.forEach(element => {
      el.appendChild(element);
    });
  }
  //attach to a parent or self
  if (parent != "") {
    parent.appendChild(el);
  } else {
    return el;
  }
}

let count = 0; // for uniqe ID
let done = []; // list of done tasks
let list = document.querySelector("ul");
let toggleButton = document.getElementById('done');

// add tasks
document.querySelector('button').onclick = function add() {
  event.preventDefault();
  // user input
  let x = document.querySelector("#do");
  // creating new checkbox
  let checkbox = newElement("input", [
    ["type", "checkbox"],
    ["id", `thing${count}`],
    ["onclick", `check('thing${count}')`]
  ]);
  // creating new label
  let label = newElement("label", [
    ["for", `thing${count}`]
  ], capitalizeFirstLetter(x.value));
  //creating new list iteam
  newElement("li", [
    ["id", `thing${count}`]
  ], "", [checkbox, label], list);
  x.value = ""; // clearing the input
  ++count;
}

// mark as done
function check(id) {
  //selecting the specific list iteam
  let li = document.querySelector(`li#${id}`);
  //selecting the specific checkbox
  let checkbox = li.children[0];
  //selecting the specific label
  let label = checkbox.nextElementSibling;
  checkbox.style.display = "none";
  label.style.textDecoration = "line-through";
  // creating a new emoji span 👍🏽
  newElement("span", [
    ["class", "emoji"],
    ["id", `${id}`],
    ["onclick", `uncheck('${id}')`]
  ], "👍🏽", "", li);
  done.push(id); // adding in the bucket
}

// mark as undone
function uncheck(id) {
  //selecting the specific list iteam
  let li = document.querySelector(`li#${id}`);
  //selecting the specific checkbox
  let checkbox = li.children[0];
  //selecting the specific label
  let label = checkbox.nextElementSibling;
  //selecting the specific emoji span
  let emoji = label.nextElementSibling;
  checkbox.style.display = "inline";
  checkbox.checked = false;
  label.style.textDecoration = "none";
  emoji.remove();
  done.splice(done.indexOf(id), 1); // poping from the bucket
}

// toggle the done tasks
toggleButton.onclick = function toggle() {
  if (toggleButton.checked) {
    // hiding
    done.forEach(id => {
      document.querySelector(`li#${id}`).style.display = "none";
    });
  } else {
    //revealing
    done.forEach(id => {
      document.querySelector(`li#${id}`).style.display = 'block';
    });
  }
}