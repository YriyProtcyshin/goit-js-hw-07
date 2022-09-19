import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDivRef = document.querySelector('.gallery');

// 1. Создание и рендер разметки
creatingAndRenderingMarkup(galleryItems, galleryDivRef);

// 2.  получение url большого изображения и открытие модального окна
galleryDivRef.addEventListener('click', getUrlBigImage);

// ==========================================================================================
//                                   function declaration
// ===========================================================================================

function creatingAndRenderingMarkup(arrItems, galleryDivRef) {
  const divImageList = arrItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');

  galleryDivRef.innerHTML = divImageList;
}

// ----------------   получение url большого изображения запуск модального окна ------------
function getUrlBigImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const bigImageUrl = event.target.dataset.source;
  openModal(bigImageUrl);
}

//---------------------- Открытие модального окна  -------------------------------------------
let instance = null;

function openModal(imageUrl) {
  instance = basicLightbox.create(`<img width="1200" height="900" src="${imageUrl}">`);
  window.addEventListener('keydown', pressEscapeOn);
  instance.show();
}

//---------------------- Закрытие модального окны кликом кнопки Escape ------------------------
function pressEscapeOn(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
  window.removeEventListener('keydown', pressEscapeOn);
}
