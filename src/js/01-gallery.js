import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items";

const galleryEl = document.querySelector(".gallery");

const imagesMarkup = createGalleryItem(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});