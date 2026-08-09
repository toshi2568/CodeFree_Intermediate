$("#js-hamburger").click(function() {
  $(".hamburger").toggleClass("is-active");
  $(".header__menu").toggleClass("is-open");
});

$(".header__menu a").click(function() {
  $(".hamburger").removeClass("is-active");
  $(".header__menu").removeClass("is-open");
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
    .find(".works-item__caption")
    .html()
    .replace(/<br[^>]*>/gi, " ");

  $(".modal__image").attr("src", imgSrc);

  $(".modal__caption").html(caption);

  $(".modal").addClass("is-open");
  $("body").addClass("is-fixed");

});

$(".modal__close, .modal__overlay").on("click", function() {
  $(".modal").removeClass("is-open");
  $("body").removeClass("is-fixed");
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

const pageTop = document.querySelector(".page-top");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }

});

$(window).on("scroll", function() {
  $(".js-fade").each(function() {
    const targetTop = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > targetTop - windowHeight + 100) {
      $(this).addClass("is-show");
    }
  });
});

