// Sticky Header
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', function () {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    header?.classList.toggle('fixed-header', scrolled > 100);
  });
});

// Slider configuration
const scrollElement = document.getElementById('myScroll');
document.getElementById('prevBtn').addEventListener('click', () => {
  scrollElement.scrollLeft -= scrollElement.offsetWidth;
});

document.getElementById('nextBtn').addEventListener('click', () => {
  scrollElement.scrollLeft += scrollElement.offsetWidth;
});