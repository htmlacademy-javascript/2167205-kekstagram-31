import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const visibleComments = bigPicture.querySelector('.social__comment-shown-count');
const totalComments = bigPicture.querySelector('.social__comment-total-count');
const commentsContainer = bigPicture.querySelector('.social__comments');

const closeButton = bigPicture.querySelector('.big-picture__cancel');
const pictureCommentsList = document.querySelector('.social__comments');


const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicutre();
  }
};

function openBigPicture(photo) {
  bigPicture.classList.remove('hidden');

  document.querySelector('body').classList.add('modal-open');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  // определяем описание фотографии
  bigPictureDescription.textContent = photo.description;
  // определяем количество лайков
  likesCount.textContent = photo.likes;

  // создаем комментарии
  const fragmentForComments = document.createDocumentFragment();
  // определяем количество показаных комментариев
  /* visibleComments.textContent = ??? */

  // определяем общее количество комментариев
  totalComments.textContent = photo.comments.length;


  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  document.addEventListener('keydown', onModalEscKeydown);
}

function closeBigPicutre() {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
}

closeButton.addEventListener('click', () => {
  closeBigPicutre();
});

export { openBigPicture };
