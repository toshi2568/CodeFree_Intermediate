$("#js-hamburger").click(function() {
  $(".hamburger").toggleClass("is-active");
  $(".header__menu").toggleClass("is-open");
});

const swiper = new Swiper(".mv__swiper", {

    loop: true,

    autoplay: {
        delay: 4000,
    },

    speed: 1000,

});

$(".works__item").on("click", function() {

  const imgSrc = $(this).data("modal");

  const caption = $(this)
    .find(".works__caption")
    .html()
    .replace(/<br[^>]*>/gi, " ");

  $(".modal__image").attr("src", imgSrc);

  $(".modal__caption").html(caption);

  $(".modal").addClass("is-open");

});

$(".modal__close, .modal__overlay").on("click", function() {
  $(".modal").removeClass("is-open");
});

const header = document.querySelector(".header");
const mv = document.querySelector(".mv");

window.addEventListener("scroll", () => { 
  if (window.scrollY > mv.offsetHeight) {
    header.classList.add("is-scroll");
  } else {
    header.classList.remove("is-scroll");
  }
});