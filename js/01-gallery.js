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

 const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);

   
const imagesDiv = document.querySelector(".gallery");

imagesDiv.insertAdjacentHTML('beforeend', markup);

imagesDiv.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault()
    if (event.target.classList.contains(".gallery__image")){
return instance.show();
}
}



instance.addEventListener("keydown", closingOnEscClick);

function closingOnEscClick(event) {
  event.preventDefault();
  if (event.code === "ESCAPE") {
  return  instance.close();
  }
    return instance.show();
}
