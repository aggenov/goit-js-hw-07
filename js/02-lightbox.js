import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryLists = document.querySelector(".gallery");

const markap = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class ='gallery__item'>
            <a class ='gallery__link' href="${original}">
                <img class ='gallery__image'
                src='${preview}'
                alt='${description}'/>
            </a>
        </li>`;
  })
  .join("");

galleryLists.insertAdjacentHTML("afterbegin", markap);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});
