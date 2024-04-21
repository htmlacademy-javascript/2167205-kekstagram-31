const smallerScaleElement = photoEditor.querySelector('.scale__control--smaller');
const valueScaleElement = photoEditor.querySelector('.scale__control--value');
const biggerScaleElement = photoEditor.querySelector('.scale__control--bigger');
const previewImageElement = photoEditor.querySelector('.img-upload__preview img');

const sliderElement = photoEditor.querySelector('.effect-level__slider');
const sliderValueElement = photoEditor.querySelector('.effect-level__value');
const effectsList = photoEditor.querySelector('.effects__list');

/* изменение масштаба картинки */

const SCALE_STEP = 25;

const changeScale = (step) => {
  const newValue = parseInt(valueScaleElement.value, 10) + parseInt(step, 10);
  if (newValue >= 25 && newValue <= 100) {
    valueScaleElement.value = `${newValue}%`;
    previewImageElement.style.transform = `scale(${newValue / 100})`;
  }
};

biggerScaleElement.addEventListener('click', () => {
  changeScale(`${SCALE_STEP}`);
});

smallerScaleElement.addEventListener('click', () => {
  changeScale(`-${SCALE_STEP}`);
});

/* открытие и закрытие модального окна редактора */

const openPhotoEditor = () => photoEditor.classList.remove('hidden');

uploadButton.addEventListener('click', () => {
  openPhotoEditor();
  document.querySelector('body').classList.add('modal-open');
});

const closePhotoEditor = () => photoEditor.classList.add('hidden');
closeButton.addEventListener('click', () => {
  closePhotoEditor();
  document.querySelector('body').classList.remove('modal-open');
});

/* Наложение эффекта на картинку */

const effects = {
  'chrome' : 'grayscale(value)', /* с шагом 0.1; 0-1 */
  'sepia' : 'sepia(value)', /* с шагом 0.1;  0-1*/
  'marvin' : 'invert(value%)', /* с шагом 1%; 0-100% */
  'phobos' : 'blur(valuepx)', /* с шагом 0.1px; 0-3px */
  'heart' : 'brightness(value)', /* с шагом 0.1; 1-3px */
};


export { openPhotoEditor, closePhotoEditor };
