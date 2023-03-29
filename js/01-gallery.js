import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryLists = document.querySelector(".gallery");
let markap = "";
galleryItems.forEach((item) => {
  const { preview, original, description } = item;
  const buildMarkup = (item) =>
    `<li class ='gallery__item'>
            <a class ='gallery__link' href="${original}">
                <img class ='gallery__image'
                src='${preview}'
                data-source='${original}'
                alt='${description}'/>
            </a>
        </li>`;
  markap += buildMarkup(item);
});
galleryLists.insertAdjacentHTML("afterbegin", markap);

galleryLists.addEventListener("click", onOpenImage);

function onOpenImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  let instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
    `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscapePress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscapePress);
      },
    }
  );

  instance.show();

  function onEscapePress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
