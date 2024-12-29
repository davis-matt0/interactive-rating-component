const ratingChoice = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit");
let card = document.querySelector(".card");

for (let i = 0; i < ratingChoice.length; i++) {
  ratingChoice[i].addEventListener("click", function () {
    let prevChoice = document.querySelector(".selected");
    if (prevChoice) {
      prevChoice.classList.remove("selected");
    }
    ratingChoice[i].classList.toggle("selected");
    let currentChoice = ratingChoice[i];
    ratingChoice[i].addEventListener("click", function () {
      ratingChoice[i].classList.toggle("selected");
    });
    submitBtn.addEventListener("click", function () {
      if (currentChoice.classList.contains("selected")) {
        card.classList.add("card-confirmation-state");
        card.innerHTML = `
        <img src="./images/illustration-thank-you.svg" class="thank-you-img" alt="a credit card reader printing a receipt">
        <div class="rating-confirmation">
          <p class="rating-confirmation-text">You selected 4 out of 5</p>
        </div>
        <h1 class-"header">Thank you!</h1>
        <p class="feedback-request thank-you-message">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        `;
      }
    });
  });
}
