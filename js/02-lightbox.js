import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markup = galleryItems
  .map(({ preview, original, description }) => {
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");

const imagesList = document.querySelector(".gallery");
imagesList.insertAdjacentHTML('beforeend', markup);

let lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});

console.log(galleryItems);
console.log(SimpleLightbox);
