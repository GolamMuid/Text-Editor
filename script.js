let input = document.querySelector("#input");
let output = document.querySelector("#output");

document.addEventListener("keydown", text);
// document.addEventListener("keyup", text);

function text() {
  output.value = input.value;
}

function bold() {
  if (output.style.fontWeight == "bold") output.style.fontWeight = "normal";
  else output.style.fontWeight = "bold";
}

function italic() {
  if (output.style.fontStyle == "italic") output.style.fontStyle = "normal";
  else output.style.fontStyle = "italic";
}

function underlined() {
  if (output.style.textDecoration == "underline")
    output.style.textDecoration = "none";
  else output.style.textDecoration = "underline";
}

function left() {
  output.style.textAlign = "left";
}
function center() {
  output.style.textAlign = "center";
}
function right() {
  output.style.textAlign = "right";
}

// let fsize = window.getComputedStyle(output, null).getPropertyValue("font-size");
// fsize = parseFloat(fsize);

// function sizechange(change) {
//   if (change === "increase") {
//     output.style.fontSize = fsize + 6 + "px";
//   } else {
//     output.style.fontSize = fsize - 6 + "px";
//   }
// }

let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

let fsize = window.getComputedStyle(output, null).getPropertyValue("font-size");
fsize = parseFloat(fsize);

increase.addEventListener("click", function () {
  fsize = fsize + 6;
  output.style.fontSize = fsize + "px";
});

decrease.addEventListener("click", function () {
  fsize = fsize - 6;
  output.style.fontSize = fsize + "px";
});
