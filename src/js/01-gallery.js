import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original.value}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    })
    .join("");
}

const onClick = (evt) => {
    evt.preventDefault();

    if (evt.target.classList.contains("gallery")) return;
    const source = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`);
    instance.show();
};

galleryEl.addEventListener("click", onClick);

const onKeydownEsc = (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  };

  window.addEventListener("keydown", onKeydownEsc);
 