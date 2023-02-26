import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryOptionsMarkUp = gallery => {
    
    const {preview, original, description} = gallery;
    
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
    </div>
    `;
};
  
const parentDivGallery = document.querySelector('.gallery');
const galleryChild = galleryItems.map(galleryOptionsMarkUp).join('');
parentDivGallery.insertAdjacentHTML('beforeend', galleryChild);

parentDivGallery.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    const linkSrc = e.target.dataset.source;
    const html = `<img width="1400" height="900" src="${linkSrc}">`;

    const instance = basicLightbox.create(html, {
		onShow: (instance) => parentDivGallery.addEventListener('keydown', onEscBtn),
		onClose: (instance) => parentDivGallery.removeEventListener('keydown', onEscBtn)
	})
    instance.show();
	
    function onEscBtn(e) {
        if(e.code === 'Escape') {
            instance.close();
        }
    }
}