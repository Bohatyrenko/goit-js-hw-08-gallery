import gallery from "./gallery-items.js";

// console.log(makeItemsGallery(gallery));

const galleryList = document.querySelector(".js-gallery");
const openModalRef = document.querySelector(".lightbox");
const imageInModal = document.querySelector(".lightbox__image");
const closeModalBtn = document.querySelector(".lightbox__button");
const itemImage = document.querySelector(".gallery__image");
const itemLink = document.querySelector(".gallery__link");

/**Функция создания разметки галереи */
function makeItemsGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}

function onItemGalleryClick(e) {
  if (!e.target.classList(".gallery__image")) {
    return;
  }
}

function openModalFn() {
  openModalRef.classList.add(".lightbox.is-open");
}

function onDefaultLink(e) {
  e.preventDefault();
}

function imageInModalFn({ src, alt }) {
  imageInModal.src = `${src}`;
  imageInModal.alt = `${alt}`;
}
/**Вешает гроздь в разметку index */
const makeCardsGallery = makeItemsGallery(gallery);
galleryList.insertAdjacentHTML("beforeend", makeCardsGallery);

/**Слушатели событий */
galleryList.addEventListener("click", onItemGalleryClick);
openModalRef.addEventListener("click", openModalFn);
itemLink.addEventListener("click", onDefaultLink);
