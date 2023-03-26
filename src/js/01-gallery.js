// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


let galleryEl = document.querySelector('.gallery');

let galleryMarkup = galleryItems
  .map(({ preview, description, original }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src='${preview}' 
        alt='${description}' 
        data-source='${original}'/>
        </a>
        </li>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);



new SimpleLightbox('.gallery a', {
  caption: true,
  captionPosition: 'top',
  captionsData: 'alt',
  captionDelay: 256,
  disableScroll: true,
});

console.log(galleryItems);
