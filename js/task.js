import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const imgModalRef = document.querySelector(".lightbox__image");
const closeModalBtnRef = document.querySelector(".lightbox__button");
const lightboxOverlay = document.querySelector(".lightbox__overlay");
let activeIndex = 0;

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

function openModalFn(e) {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    modalRef.classList.add("is-open");
    imgModalRef.src = e.target.dataset.source;
  }
}
function closeModal() {
  modalRef.classList.remove("is-open");
  imgModalRef.removeAttribute("src");
}
function onPressArrow(e) {
  if (e.key === "ArrowLeft" && activeIndex > 0) {
    activeIndex -= 1;
    imgModalRef.src = gallery[activeIndex].original;
  }
  if (e.key === "ArrowRight" && activeIndex < gallery.length - 1) {
    activeIndex += 1;
    imgModalRef.src = gallery[activeIndex].original;
  }
  if (e.key === "ArrowLeft" && activeIndex === 0) {
    activeIndex = gallery.length - 1;
    imgModalRef.src = gallery[activeIndex].original;
  }
  if (e.key === "ArrowRight" && activeIndex === gallery.length - 1) {
    activeIndex = 0;
    imgModalRef.src = gallery[activeIndex].original;
  }
}
galleryListRef.insertAdjacentHTML("beforeend", makeGallery.join(""));

galleryListRef.addEventListener("click", openModalFn);
lightboxOverlay.addEventListener("click", closeModal);
closeModalBtnRef.addEventListener("click", closeModal);

window.addEventListener("keydown", onPressArrow);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
