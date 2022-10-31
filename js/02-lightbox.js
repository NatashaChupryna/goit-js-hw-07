import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markup = galleryItems
    .map(({ preview, original, description }) => {
      return
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");

const imagesList = document.querySelector(".gallery");
imagesList.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.5,
});

console.log(galleryItems);
console.log(SimpleLightbox);
