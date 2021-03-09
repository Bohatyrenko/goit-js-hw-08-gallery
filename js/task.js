{
  /* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>; */
}
import gallery from "./gallery-items.js";
console.log(gallery);

const makeItemGallery = ({ preview, original, description }) => {
  const itemCard = document.createElement("li");
  itemCard.classList.add("gallery__item");

  const itemLink = document.createElement("a");
  itemLink.classList.add("gallery__link");
  itemLink.href =
    "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg";

  const itemImage = document.createElement("img");
  itemImage.classList.add("gallery__image");
  itemImage.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
  );
  itemImage.dataset.source =
    "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg";
  itemImage.setAttribute("alt", "Tulips");

  itemLink.append(itemImage);
  itemCard.append(itemLink);
};

console.log(makeItemGallery());
