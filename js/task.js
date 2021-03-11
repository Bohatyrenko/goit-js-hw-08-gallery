import gallery from "./gallery-items.js";

console.log(makeItemsGallery(gallery));

const galleryList = document.querySelector(".js-gallery");
const makeCardsGallery = makeItemsGallery(gallery);
galleryList.insertAdjacentHTML("beforeend", makeCardsGallery);

galleryList.addEventListener("click", onItemGalleryClick);

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
  console.log(e.target);
}
