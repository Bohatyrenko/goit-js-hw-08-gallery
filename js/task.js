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
  itemLink.href = `${original}`;

  const itemImage = document.createElement("img");
  itemImage.classList.add("gallery__image");
  itemImage.src = `${preview}`;
  itemImage.dataset.source = `${original}`;
  itemImage.alt = `${description}`;

  itemLink.append(itemImage);
  itemCard.append(itemLink);
  return itemCard;
};

console.log(makeItemGallery());
