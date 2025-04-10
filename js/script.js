document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const innerHeader = document.getElementById('innerHeader');
  
    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
  
      header?.classList.toggle('bg-custom-color', scrolled > 100);
      innerHeader?.classList.toggle('top-position', scrolled > 30);
    });
  });