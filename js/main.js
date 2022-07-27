const menuBtnBox = document.querySelector(".menuBtnBox");
const menuBox = document.querySelector(".menuBox");
menuBtnBox.addEventListener("click", () => {
  if(menuBox.className.includes("show")) {
    menuBox.classList.remove("show");
  } else {
    menuBox.classList.add("show");
  }
})

const toyProject = document.querySelector(".toyProject");
const toyArrowRight = toyProject.querySelector(".arrowRight");
const toyArrowLeft = toyProject.querySelector(".arrowLeft");
const cardInner = toyProject.querySelector(".cardInner");
const cards = cardInner.querySelectorAll(".card");

cardInner.style.width = (cards.length * 250)+"px";
let cardInnerLeft = 20;
let index = 0;
toyArrowRight.addEventListener("click", () => {
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
    toyArrowRight.classList.add("active");
  } else {
    toyArrowRight.classList.remove("active");
    toyArrowLeft.classList.remove("active");
  }
})

toyArrowLeft.addEventListener("click", () => {
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
    toyArrowLeft.classList.add("active");
  } else {
    toyArrowLeft.classList.remove("active");
    toyArrowRight.classList.remove("active");
  }
})

const study = document.querySelector(".study");
const studyArrowLeft = study.querySelector(".arrowLeft");
const studyArrowRight = study.querySelector(".arrowRight");
const studyCardView = study.querySelector(".cardView");
const studyCards = study.querySelectorAll(".card");

studyCardView.style.width = (studyCards.length*210) + "px";

let studyCardViewLeft = 30;
let studyIndex = 0;

studyArrowRight.addEventListener("click", () => {
  studyCardViewLeft -= 210;
  studyCardView.style.left = studyCardViewLeft+"px";

  studyCards.forEach(studyCard => {
    studyCard.classList.remove("module");
    studyCard.classList.add("module--reverse");
  })
  studyIndex += 1;
  studyCards[studyIndex].classList.add("module");
  studyCards[studyIndex].classList.remove("module--reverse");
  if(studyIndex == studyCards.length) {
    studyIndex = studyCards.length-1;
  }
  if (studyIndex == studyCards.length-1) {
    studyArrowRight.classList.add("active");
  } else {
    studyArrowRight.classList.remove("active");
    studyArrowLeft.classList.remove("active");
  }

})

studyArrowLeft.addEventListener("click", () => {
  studyCardViewLeft += 210;
  studyCardView.style.left = studyCardViewLeft+"px";

  studyCards.forEach(studyCard => {
    studyCard.classList.remove("module");
    studyCard.classList.add("module--reverse");
  })
  studyIndex -= 1;
  studyCards[studyIndex].classList.add("module");
  studyCards[studyIndex].classList.remove("module--reverse");
  if(studyIndex == -1) {
    studyIndex = 0;
  }
  if (studyIndex == 0) {
    studyArrowLeft.classList.add("active");
  } else {
    studyArrowLeft.classList.remove("active");
    studyArrowRight.classList.remove("active");
  }

})