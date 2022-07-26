const menuBtnBox = document.querySelector(".menuBtnBox");
const menuBox = document.querySelector(".menuBox");
menuBtnBox.addEventListener("click", () => {
  if(menuBox.className.includes("show")) {
    menuBox.classList.remove("show");
  } else {
    menuBox.classList.add("show");
  }
})

const arrowRight = document.querySelector(".arrowRight");
const arrowLeft = document.querySelector(".arrowLeft");
const cardInner = document.querySelector(".cardInner");
const cards = cardInner.querySelectorAll(".card");

cardInner.style.width = (cards.length * 250)+"px";
let cardInnerLeft = 20;
let index = 0;
arrowRight.addEventListener("click", () => {
  cardInnerLeft -= 250;
  cardInner.style.left = cardInnerLeft+"px";
  cards.forEach(card => {
    card.classList.remove("active");
  })
  index += 1;
  cards[index].classList.add("active");
  if (index == cards.length) {
    index = cards.length-1;
  }
  if (index == cards.length-1) {
    arrowRight.classList.add("active");
  } else {
    arrowRight.classList.remove("active");
    arrowLeft.classList.remove("active");
  }
})

arrowLeft.addEventListener("click", () => {
  cardInnerLeft += 250;
  cardInner.style.left = cardInnerLeft+"px";

  cards.forEach(card => {
    card.classList.remove("active");
  })
  index -= 1;
  cards[index].classList.add("active");
  if (index == -1) {
    index = 0;
  }
  if (index == 0) {
    arrowLeft.classList.add("active");
  } else {
    arrowLeft.classList.remove("active");
    arrowRight.classList.remove("active");
  }
})