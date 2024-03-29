import { posting } from './data.js';

const thumbnails = document.querySelector('.pictures');
const thumbnail = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = posting();
const fragment = document.createDocumentFragment();

createThumbnail.forEach((post) => {
  const createElement = thumbnail.cloneNode(true);
  createElement.querySelector('.picture__img').src = post.url;
  createElement.querySelector('.picture__img').alt = post.description;
  createElement.querySelector('.picture__comments').textContent = post.comments;
  createElement.querySelector('.picture__likes').textContent = post.likes;
  fragment.appendChild(createElement);
});

thumbnails.appendChild(fragment);
