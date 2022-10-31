import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
     <a class="gallery__link" href="large-image.jpg">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");


   
const imagesDiv = document.querySelector(".gallery");

imagesDiv.insertAdjacentHTML('beforeend', markup);

imagesDiv.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  let urlImg = evt.target.dataset.source;
  modalImg = basicLightbox.create(`<img class="modal__image" src="${urlImg}" width="800" height="600">`
  );
  modalImg.show();
}

// instance.addEventListener("keydown", closingOnEscClick);

// function closingOnEscClick(event) {
//   event.preventDefault();
//   if (event.code === "ESCAPE") {
//   return  instance.close();
//   }
//     return instance.show();
// }
