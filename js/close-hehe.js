document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".close__button-1")
    .addEventListener("click", function () {
      document.querySelector(".hehe-block-1").classList.toggle("close");
    });
  document
    .querySelector(".close__button-2")
    .addEventListener("click", function () {
      document.querySelector(".hehe-block-2").classList.toggle("close");
    });
});
