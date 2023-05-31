window.addEventListener("resize", function() {
  if (window.innerWidth > 767) {
    document.querySelector("body").classList.remove("lock");
    document.querySelectorAll(".header__menu__list").forEach(function (el) {
      el.classList.remove("open");
    });
    document.querySelectorAll(".burger").forEach(function (el) {
      el.classList.remove("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".burger").addEventListener("click", function () {
    document.querySelectorAll(".burger").forEach(function (el) {
      el.classList.toggle("active");
    });
    document.querySelectorAll(".header__menu__list").forEach(function (el) {
      el.classList.toggle("open");
    });
    document.querySelector("body").classList.toggle("lock");
  });
  document.querySelectorAll(".header__menu__dropdown").forEach(function (el) {
    el.addEventListener("click", function () {
      document.querySelectorAll(".burger").forEach(function (el) {
        el.classList.remove("active");
      });
      document.querySelectorAll(".header__menu__list").forEach(function (el) {
        el.classList.remove("open");
      });
      document.querySelector("body").classList.remove("lock");
    });
  });
});