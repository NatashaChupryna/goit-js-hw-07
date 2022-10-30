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

imagesDiv.innerHTML = markup;
console.log(galleryItems);
imagesDiv.addEventListener("click", (event) => {
  event.preventDefault();
});  

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
        </p>
    </div>
`);
instance.show();

instance.addEventListener("keydown", closingOnEscClick);
function closingOnEscClick(event) {
    event.preventDefault();
    if (event.code === "ESCAPE") {
        instance.close();
    }
 }
