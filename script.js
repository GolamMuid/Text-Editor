//> All variable Declaration

let input = document.querySelector("#input");
let output = document.querySelector("#output");

let buttonBold = document.querySelector("#bold");
let buttonItalic = document.querySelector("#italic");
let buttonUnderlined = document.querySelector("#underlined");

let leftAlign = document.querySelector("#leftAlign");
let centerAlign = document.querySelector("#centerAlign");
let rightAlign = document.querySelector("#rightAlign");

let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

let fsize = window.getComputedStyle(output, null).getPropertyValue("font-size");
fsize = parseFloat(fsize);

// Variables end here<

//> Function to copy texts

// document.addEventListener("keydown", text);
document.addEventListener("keyup", text);

function text() {
  console.log(input.value);
  output.value = input.value;
}

// Function ends here<

//> Bold Italic and Underlined Buttons

function bold() {
  if (output.style.fontWeight == "bold") {
    output.style.fontWeight = "normal";
  } else {
    output.style.fontWeight = "bold";
  }

  if (buttonBold.classList.contains("active")) {
    buttonBold.classList.remove("active");
  } else {
    buttonBold.classList.add("active");
  }
}

function italic() {
  if (output.style.fontStyle == "italic") {
    output.style.fontStyle = "normal";
  } else {
    output.style.fontStyle = "italic";
  }

  if (buttonItalic.classList.contains("active")) {
    buttonItalic.classList.remove("active");
  } else {
    buttonItalic.classList.add("active");
  }
}

function underlined() {
  if (output.style.textDecoration == "underline") {
    output.style.textDecoration = "none";
  } else {
    output.style.textDecoration = "underline";
  }
  if (buttonUnderlined.classList.contains("active")) {
    buttonUnderlined.classList.remove("active");
  } else {
    buttonUnderlined.classList.add("active");
  }
}

//Bold Italic and Underlined buttons end here<

//>Alignment Buttons

function left() {
  output.style.textAlign = "left";

  // if (output.style.textAlign == "left") {
  //   leftAlign.classList.add("active");
  // } else {
  //   leftAlign.classList.remove("active");
  // }
}

function center() {
  output.style.textAlign = "center";

  // if (output.style.textAlign == "center") {
  //   centerAlign.classList.add("active");
  // } else {
  //   centerAlign.classList.remove("active");
  // }
}

function right() {
  output.style.textAlign = "right";

  // if (output.style.textAlign == "right") {
  //   rightAlign.classList.add("active");
  // } else {
  //   rightAlign.classList.remove("active");
  // }
}

//<Alignment Buttons end here

//> Font size increase-decrease

increase.addEventListener("click", function () {
  fsize = fsize + 6;
  output.style.fontSize = fsize + "px";
});

decrease.addEventListener("click", function () {
  fsize = fsize - 6;
  output.style.fontSize = fsize + "px";
});

// Font size increase-decrease ends here<

// > Font size manual increas-decrease

document.addEventListener("keyup", fontfix);

function fontfix() {
  let fontNumber = document.querySelector("#fontNumber").value;
  fontNumber = parseInt(fontNumber);
  console.log(fontNumber);
  output.style.fontSize = fontNumber + "px";
}

// Font size manual increas-decrease <
