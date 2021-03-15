const getBoxes = document.querySelectorAll(".box");
const boxes = document.getElementsByClassName("box");
const p = document.querySelectorAll("p");
const getBox1 = document.querySelector(".box1");
const getBox2 = document.querySelector(".box2");
const getBox3 = document.querySelector(".box3");
const getBox4 = document.querySelector(".box4");
const getBox5 = document.querySelector(".box5");
const getBox6 = document.querySelector(".box6");
const getBox7 = document.querySelector(".box7");
const getBox8 = document.querySelector(".box8");
const getBox9 = document.querySelector(".box9");
const getContainer = document.querySelector(".main-container");
const getBtn_X = document.querySelector(".btn-x");
const getBtn_O = document.querySelector(".btn-o");
const chosePlayer = document.querySelector(".chosePlayer");
const display = document.querySelector(".display");
const btn_check = document.querySelector(".btn_check");
const winn = document.querySelector(".winin-part h1");
const newGme = document.querySelector(".restart");

const class1 = document.querySelectorAll(".class1");
const class2 = document.querySelectorAll(".class2");
const class3 = document.querySelectorAll(".class3");
const class4 = document.querySelectorAll(".class4");
const class5 = document.querySelectorAll(".class5");
const class6 = document.querySelectorAll(".class6");
const class7 = document.querySelectorAll(".class7");
const class8 = document.querySelectorAll(".class8");
const body = document.querySelector("body");

let playerX = "X";
let playerO = "O";

let boxstatus = false;

gsap.from(".winin-part h1", {
  duration: 1,
  rotation: 720,
  ease: "bounce",
});

getBtn_X.addEventListener("click", creatSymbol);

function creatSymbol() {
  chosePlayer.style.display = "none";
  display.style.display = "block";
  btn_check.style.display = "block";
  newGme.style.display = "block";
  getBoxes.forEach((box) =>
    box.addEventListener("click", (e) => {
      if (box.click) {
        box.style.pointerEvents = "none";
      }
      if (boxstatus === false) {
        box.innerHTML = playerX;
        boxstatus = true;
      } else if (boxstatus === true) {
        box.innerHTML = playerO;
        boxstatus = false;
      }
    })
  );
}
getBtn_O.addEventListener("click", creatNewSymbole);

function creatNewSymbole() {
  chosePlayer.style.display = "none";
  display.style.display = "block";
  btn_check.style.display = "block";
  newGme.style.display = "block";
  getBoxes.forEach((box) =>
    box.addEventListener("click", () => {
      if (box.click) {
        box.style.pointerEvents = "none";
      }
      if (boxstatus === false) {
        box.innerHTML = playerO;
        boxstatus = true;
      } else if (boxstatus === true) {
        box.innerHTML = playerX;
        boxstatus = false;
      }
    })
  );
}

btn_check.addEventListener("click", classes);

function classes() {
  for (i = 0; i < class1.length; i++) {
    if (
      class1[0].innerHTML == playerX &&
      class1[1].innerHTML == playerX &&
      class1[2].innerHTML == playerX
    ) {
      class1[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class1.length; i++) {
    if (
      class1[0].innerHTML == playerO &&
      class1[1].innerHTML == playerO &&
      class1[2].innerHTML == playerO
    ) {
      class1[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class2.length; i++) {
    if (
      class2[0].innerHTML == playerX &&
      class2[1].innerHTML == playerX &&
      class2[2].innerHTML == playerX
    ) {
      class2[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class2.length; i++) {
    if (
      class2[0].innerHTML == playerO &&
      class2[1].innerHTML == playerO &&
      class2[2].innerHTML == playerO
    ) {
      class2[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class3.length; i++) {
    if (
      class3[0].innerHTML == playerX &&
      class3[1].innerHTML == playerX &&
      class3[2].innerHTML == playerX
    ) {
      class3[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class3.length; i++) {
    if (
      class3[0].innerHTML == playerO &&
      class3[1].innerHTML == playerO &&
      class3[2].innerHTML == playerO
    ) {
      class3[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class4.length; i++) {
    if (
      class4[0].innerHTML == playerX &&
      class4[1].innerHTML == playerX &&
      class4[2].innerHTML == playerX
    ) {
      class4[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class4.length; i++) {
    if (
      class4[0].innerHTML == playerO &&
      class4[1].innerHTML == playerO &&
      class4[2].innerHTML == playerO
    ) {
      class4[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class5.length; i++) {
    if (
      class5[0].innerHTML == playerX &&
      class5[1].innerHTML == playerX &&
      class5[2].innerHTML == playerX
    ) {
      class5[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class5.length; i++) {
    if (
      class5[0].innerHTML == playerO &&
      class5[1].innerHTML == playerO &&
      class5[2].innerHTML == playerO
    ) {
      class5[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class6.length; i++) {
    if (
      class6[0].innerHTML == playerX &&
      class6[1].innerHTML == playerX &&
      class6[2].innerHTML == playerX
    ) {
      class6[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class6.length; i++) {
    if (
      class6[0].innerHTML == playerO &&
      class6[1].innerHTML == playerO &&
      class6[2].innerHTML == playerO
    ) {
      class6[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class7.length; i++) {
    if (
      class7[0].innerHTML == playerX &&
      class7[1].innerHTML == playerX &&
      class7[2].innerHTML == playerX
    ) {
      class7[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class7.length; i++) {
    if (
      class7[0].innerHTML == playerO &&
      class7[1].innerHTML == playerO &&
      class7[2].innerHTML == playerO
    ) {
      class7[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class8.length; i++) {
    if (
      class8[0].innerHTML == playerX &&
      class8[1].innerHTML == playerX &&
      class8[2].innerHTML == playerX
    ) {
      class8[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
  for (i = 0; i < class8.length; i++) {
    if (
      class8[0].innerHTML == playerO &&
      class8[1].innerHTML == playerO &&
      class8[2].innerHTML == playerO
    ) {
      class8[i].classList.add("classe");
      winn.style.display = "block";
    }
  }
}

newGme.addEventListener("click", () => {
  location.reload(classes);
});
