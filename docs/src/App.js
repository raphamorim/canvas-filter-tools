import filter, { blackAndWhite, sepia, raphael } from 'canvas-image-filter'

const image = document.querySelector('#image');
const blackAndWhiteButton = document.querySelector('#black-and-white');
const sepiaButton = document.querySelector('#sepia');
const raphaelButton = document.querySelector('#raphael');

blackAndWhiteButton.addEventListener('click', (e) => {
  image.src = filter(image, blackAndWhite);
});

sepiaButton.addEventListener('click', (e) => {
  image.src = filter(image, sepia);
});

raphaelButton.addEventListener('click', (e) => {
  image.src = filter(image, raphael);
});
