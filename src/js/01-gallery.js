// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const container = document.querySelector('.gallery');
console.log(container);

const markup = createMarkup(galleryItems)

container.insertAdjacentHTML('beforeend', markup)
container.addEventListener('click', handleProductClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join(''); 
};

function handleProductClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
const gallerySource = event.target.dataset.source;
    const galleryName = event.target.alt;

//     const instance = SimpleLightbox.create(
//     `<div class="modal"><img src="${gallerySource}" alt="${galleryName}"/></div>`
    // )
    
//     const instance = new SimpleLightbox(
//   `<div class="modal"><img src="${gallerySource}" alt="${galleryName}"/></div>`
    // );
    const instance = new SimpleLightbox('.gallery__item a');

    instance.show();
};

// const lightbox = new SimpleLightbox('.gallery a', { /* options */ });