// Sticky Header
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', function () {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    header?.classList.toggle('fixed-header', scrolled > 10);
  });
});

// Profile Slider Settings
const swiper = new Swiper(".profile-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

// Testimonial Slider Settings
const verticalSwiper = new Swiper('.review-vertical-slider', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Country Select
$("#contactNo").intlTelInput({
	initialCountry: "in",
	separateDialCode: true,
});