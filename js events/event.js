// option 1 directly

/* <button onclick="document.body.style.backgroundColor='steelblue'">Make SteelBlue</button> */

// option 2 [every time important]
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3
const blueBtn = document.getElementById("make-blue");
blueBtn.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "skyblue";
}

// option 3 ANOTHER [sometime]
const makeGray = document.getElementById("make-gray");

makeGray.onclick = function garyBtn() {
  document.body.style.backgroundColor = "gray";
};

// option 4
const goldenBtn = document.getElementById("make-golden");

goldenBtn.addEventListener("click", makeGolden);

function makeGolden() {
  document.body.style.backgroundColor = "gold";
}

// option 4 another
const greenBtn = document.getElementById("make-green");
greenBtn.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option 4 final [every time important]
document.getElementById("make-tomato").addEventListener("click", function () {
  document.body.style.backgroundColor = "tomato";
});
