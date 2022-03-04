// -------------------drag and drop-------------
const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  })
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    }
    else {
      container.insertBefore(draggable, afterElement);
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElement = [...container.querySelectorAll('.draggable:not(.dragging)')];
  return draggableElement.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return {offset:offset,element:child}
    }
    else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

// -------------------drag and drop-------------

// -------------------img toogler-------------

let img = document.getElementById("img");
let button = document.getElementById("button");
function status() {
  if (button.innerHTML === "Stop image") {
    alert("You want to stop the image");
    img.classList.remove("active");
    img.classList.add("disable");
    button.innerHTML = "Open image";
  } else {
    img.classList.remove("disable");
    img.classList.add("active");
    button.innerHTML = "Stop image";
  }
}

// -------------------img toogler-------------


///-------------------color piker--------


let pikerfield = document.querySelector(".pikerfield");
var previousColor = "defult-color";

function checkColor(color) {
  console.log(color);
  pikerfield.classList.add(color);
  if (document.querySelectorAll("color1").length > 1) return "color1";
  else if (document.querySelectorAll("color2").length > 1) return "color2";
  else if (document.querySelectorAll("color3").length > 1) return "color3";
  else if (document.querySelectorAll("color4").length > 1) return "color4";
  else if (document.querySelectorAll("color5").length > 1) return "color5";
  else return "defult-color";
}

const colorList = [
  "color1",
  "color2",
  "color3",
  "color4",
  "color5",
  "defult-color",
];
function colormouseover(color) {
  pikerfield.classList.remove(...colorList);
  checkColor(color);
}
function colormouseout() {
  console.log(previousColor);
  pikerfield.classList.remove(...colorList);

  pikerfield.classList.add(previousColor);
}

function colorsetup(color) {
  previousColor = color;
  pikerfield.classList.remove(...colorList);
  checkColor(color);
}
//-------color piker-------------------

// --------------------headin hidder--------------------
let heading = document.querySelector(".paragraph-title");
let paragraph = document.querySelector(".paragraph");
let fullParagraph = paragraph.innerHTML;
let check = true;
function partialrevealed() {
  paragraph.innerHTML = paragraph.innerHTML.slice(0, 100) + "......";
  paragraph.classList.add("active");
  paragraph.classList.remove("disable");
}

function stoprevealed() {
  if (check) {
      paragraph.classList.remove("active");
   paragraph.classList.add("disable");
  }
 
}

function showparagraph() {
  check = false;
    paragraph.innerHTML = fullParagraph;
    paragraph.classList.add("active");
    paragraph.classList.remove("disable");
}

// --------------------headin hidder--------------------

