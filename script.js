window.addEventListener('DOMContentLoaded', (event) => {
  const aboutUsLink = document.querySelector('a[href="#about-us"]');

  aboutUsLink.addEventListener('click', (event) => {
    event.preventDefault();
    const heroSection = document.getElementById('about-us');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('DOMContentLoaded', (event) => {
  const aboutUsLink = document.querySelector('a[href="#servicesheadline-1"]');

  aboutUsLink.addEventListener('click', (event) => {
    event.preventDefault();
    const heroSection = document.getElementById('servicesheadline-1');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('DOMContentLoaded', (event) => {
  const aboutUsLink = document.querySelector('a[href="#our-products-1"]');

  aboutUsLink.addEventListener('click', (event) => {
    event.preventDefault();
    const heroSection = document.getElementById('our-products-1');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('DOMContentLoaded', (event) => {
  const aboutUsLink = document.querySelector('a[href="#toprow1"]');

  aboutUsLink.addEventListener('click', (event) => {
    event.preventDefault();
    const heroSection = document.getElementById('toprow1');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  });
});








/*================*/
function zoomOutText(index) {
  var imageContainer = document.querySelector('.favorite-group:nth-child(' + index + ') .image-container');
  var viewMore = document.getElementById('view-more' + index);
  imageContainer.classList.add('zoom-out');
  viewMore.classList.add('show');
}

function zoomInText(index) {
  var imageContainer = document.querySelector('.favorite-group:nth-child(' + index + ') .image-container');
  var viewMore = document.getElementById('view-more' + index);
  imageContainer.classList.remove('zoom-out');
  viewMore.classList.remove('show');
}

/*trusted brands*/
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const slider = document.querySelector(".slider");
const slideWidth = slider.offsetWidth;

prevArrow.addEventListener("click", () => {
  slider.style.transform = `translateX(${slideWidth}px)`;
});

nextArrow.addEventListener("click", () => {
  slider.style.transform = "translateX(0)";
});

/*contact us*/
const image = document.querySelector('.animated-image');

function toggleZoom() {
  image.classList.toggle('zoom-in');
}

image.addEventListener('mouseenter', toggleZoom);
image.addEventListener('mouseleave', toggleZoom);

