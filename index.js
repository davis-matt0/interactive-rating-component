const ratingChoice = document.querySelectorAll(".rating");

for (let i = 0; i < ratingChoice.length; i++) {
  ratingChoice[i].addEventListener("click", function () {
    let prevChoice = document.querySelector(".selected");
    if (prevChoice) {
      prevChoice.classList.remove("selected");
    }
    ratingChoice[i].classList.toggle("selected");
    ratingChoice[i].addEventListener("click", function () {
      ratingChoice[i].classList.toggle("selected");
    });
  });
}
