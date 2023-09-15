import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const container = document.querySelector('.gallery');
console.log(container);

const markup = createMarkup(galleryItems)

container.insertAdjacentHTML('beforeend', markup)

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    }).join(''); 
};

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,  
        captionsData: 'alt', 
        captionDelay: 250, 
});