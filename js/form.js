import { isEscapeKey } from './util.js';
import { validation } from './validation.js';

const imageUploadform = document.querySelector('.img-upload__form');

const photoEditor = document.querySelector('.img-upload__overlay');
const closeButton = photoEditor.querySelector('.img-upload__cancel');
const fileInputElement = imageUploadform.querySelector('.img-upload__input');
const uploadButton = document.querySelector('.img-upload__control');
const hashtagValueElement = imageUploadform.querySelector('.text__hashtags');
const commentValueElement = imageUploadform.querySelector('.text__description');


/* открытие модального окна */

const openForm = () => {
  photoEditor.classList.remove('hidden');
  document.querySelector('body').classList.add('modal');
};

/* закрытие модального окна */

const closeForm = () => {
  photoEditor.classList.add('hidden');
  document.querySelector('body').classList.remove('modal');
  closeButton.removeEventListener('click', () => {});
  fileInputElement.value = '';
};

/* Закрытие модального окна на esc */

const onModalUploadEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

/* закрытие модального окна редактора при нажатии на кнопку*/
const closeModalUpload = () => {
  closeButton.addEventListener('click', () => {
    closeForm();
  });
};

/* изменение состояния загрузочного инпута */

fileInputElement.addEventListener('change', () => {
  openForm();
  document.addEventListener('keydown', onModalUploadEscKeydown);
  closeModalUpload();
});

validation(imageUploadform, hashtagValueElement, commentValueElement);
/* почему закрыв окно на esc больше не открывается модальное окно редактирования фотографии??
  надо было сбросить значение поля ввода загрузки файла

  проверить обработчики
 */

export {imageUploadform, hashtagValueElement, commentValueElement};
