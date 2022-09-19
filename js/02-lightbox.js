import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDivRef = document.querySelector('.gallery');

// 1. Создание и рендер разметки
creatingAndRenderingMarkup(galleryItems, galleryDivRef);

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery a', options);

// ==========================================================================================
//                                   function declaration
// ===========================================================================================

function creatingAndRenderingMarkup(arrItems, galleryDivRef) {
  const divImageList = arrItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    })
    .join('');

  galleryDivRef.innerHTML = divImageList;
}
