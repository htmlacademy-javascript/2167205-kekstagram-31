import { openBigPicture } from './post-modal.js';

const thumbnailsContainer = document.querySelector('.pictures');
const thumbnail = document.querySelector('#picture').content.querySelector('.picture');
const localData = [];

const setData = (photos) => {
  localData.length = 0;
  localData.push(...photos);
};

const renderPhotos = (data) => {
  setData(data);
  const fragment = document.createDocumentFragment();
  data.forEach(({id, url, description, comments, likes}) => {
    const createElement = thumbnail.cloneNode(true);
    createElement.dataset.pictureId = id;
    createElement.querySelector('.picture__img').src = url;
    createElement.querySelector('.picture__img').alt = description;
    createElement.querySelector('.picture__comments').textContent = comments.length;
    createElement.querySelector('.picture__likes').textContent = likes;
    fragment.appendChild(createElement);
  });
  thumbnailsContainer.appendChild(fragment);
};

thumbnailsContainer.addEventListener ('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    const currentPhoto = localData.find((photo) => Number(photo.id) === Number(currentPicture.dataset.pictureId));
    openBigPicture(currentPhoto);
  }
});

export { renderPhotos };

