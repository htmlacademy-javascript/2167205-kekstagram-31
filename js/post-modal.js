import { isEscapeKey } from './util.js';
import { clearComments, renderComments } from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');

const visibleComments = bigPicture.querySelector('.social__comment-shown-count');
const totalComments = bigPicture.querySelector('.social__comment-total-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');

const closeButton = bigPicture.querySelector('.big-picture__cancel');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicutre();
  }
};

function openBigPicture(photo) {
  bigPicture.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  document.querySelector('body').classList.add('modal-open');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  bigPictureDescription.textContent = photo.description;
  likesCount.textContent = photo.likes;

  // определяем общее количество комментариев
  totalComments.textContent = photo.comments.length;

  // создаем комментарии
  commentsContainer.innerHTML = '';
  renderComments(photo.comments);

  document.addEventListener('keydown', onModalEscKeydown);
}

function closeBigPicutre() {
  clearComments();
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
}

closeButton.addEventListener('click', () => {
  closeBigPicutre();
});

export { openBigPicture };
export { visibleComments, commentsContainer, commentElement, commentsLoader };
