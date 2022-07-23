import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const gallery = document.querySelector(".gallery");

const imgGallery = galleryItems.map(({preview, original, description}) => {
    console.log(galleryItems);
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
       
}).join(" ");

gallery.insertAdjacentHTML("beforeend", ` ${imgGallery}`);
 

const imageСaption = new SimpleLightbox('.gallery a', {
 
    overlayOpacity: 1,
    captionsData: 'alt',
    captionDelay: 250,
  });
