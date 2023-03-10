import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryOptionsMarkUp = gallery => {
    
    const {preview, original, description} = gallery;
    
    return `
    <li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
        </a>
    </li>
    `;
};
  
const parentDivGallery = document.querySelector('.gallery');
const galleryChild = galleryItems.map(galleryOptionsMarkUp).join('');
parentDivGallery.insertAdjacentHTML('beforeend', galleryChild);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

parentDivGallery.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
}
