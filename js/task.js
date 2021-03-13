import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const imgModalRef = document.querySelector(".lightbox__image");
const closeModalBtnRef = document.querySelector(".lightbox__button");
const lightboxOverlay = document.querySelector(".lightbox__overlay");

/**Переменная индекса картинки*/
let activeIndex = 0;

/**Создаем гроздь галереи */
const makeGallery = gallery.map(({ preview, original, description }) => {
  return `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
});

/**Вешаем гроздь в разметку, join - связывает массив строк в одну строку*/
galleryListRef.insertAdjacentHTML("beforeend", makeGallery.join(""));

/**Функция открытия модалки через добавление класса is-open */
function openModalFn(e) {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    modalRef.classList.add("is-open");
    imgModalRef.src = e.target.dataset.source;
  }
}

/**Добавляет слушатель события на ul (только на IMG) для открытия модалки */
galleryListRef.addEventListener("click", openModalFn);

/**Функция закрытия модального окна, снятия класса is-open и очистку SRC */
function closeModal() {
  modalRef.classList.remove("is-open");
  imgModalRef.removeAttribute("src");
}
/**Добавляет слушатель события на закрытие модалки через нажатие на overlay */
lightboxOverlay.addEventListener("click", closeModal);

/**Добавляет слушатель события на закрытие модалки через нажатие на кнопку */
closeModalBtnRef.addEventListener("click", closeModal);

/**Аналог функции закрытия модального окна через кнопку (Снимает класс is-open и убирает значение из SRC */
// closeModalBtnRef.onclick = () => {
//   modalRef.classList.remove("is-open");
//   imgModalRef.removeAttribute("src");
// };

/**Закрытие модального окна через клавишу Escape */
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

/**Функция "карусели" перелистывание картинок кнопками ArrowLeft и ArrowRight*/
function onPressArrow(e) {
  if (e.key === "ArrowLeft" && activeIndex > 0) {
    activeIndex -= 1;
    imgModalRef.src = gallery[activeIndex].original;
  }
  if (e.key === "ArrowRight" && activeIndex < gallery.length - 1) {
    activeIndex += 1;
    imgModalRef.src = gallery[activeIndex].original;
  }
}
/**Добавляет слушатель события кнопки ArrowLeft и ArrowRightна для перелистывание картинок*/
window.addEventListener("keydown", onPressArrow);
