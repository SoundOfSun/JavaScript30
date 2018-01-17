function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// 1. Grab all the images.
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  console.count(e);
  sliderImages.forEach(slideImage => {
    // 2. Find how much the page is scrolled down at the middle of an image
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
    // 3. Find the bottom of an image (when scroll back up)
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      slideImage.classList.add('active');
    } else {
      slideImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
