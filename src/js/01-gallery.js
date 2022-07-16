// Add imports above this line
import { galleryItems } from './gallery-items';

// Дополнительный импорт стилей

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener('click', onContaiterClick)


 

const imgGallery = galleryItems.map(({preview, original, description}) => {
    console.log(galleryItems);
    return `<div class="gallery__item"><a class="gallery__link" href="${original}" ><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></div>`

    
}).join(" ");

gallery.insertAdjacentHTML("beforeend", ` ${imgGallery}`); 


function onContaiterClick (evt){
    evt.preventDefault()
    if(!evt.target.classList.contains('gallery__image')){
        return
      } 
      const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}">
  `)
      console.log(evt.target.dataset.sourse)
      instance.show()


}