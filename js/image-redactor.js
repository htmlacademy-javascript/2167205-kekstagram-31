import { Connect } from 'vite';
import { imageUploadform } from './form.js';

const scale = imageUploadform.querySelector('.scale');
const smallerScale = scale.querySelector('.scale__control--smaller');
const biggerScale = scale.querySelector('.scale__control--bigger');
const currentScale = scale.querySelector('.scale__control--value');
const SCALE_COUNTER = 25;
let scaleValueString = 100;

const imagePreview = imageUploadform.querySelector('.img-upload__preview img');

/* изменение масштаба изображения */

const toScaleImage = () => {
  scale.addEventListener('click', (evt) => {

    if (evt.target === smallerScale) {
      if (25 <= scaleValueString - SCALE_COUNTER) {
        scaleValueString -= SCALE_COUNTER;
        currentScale.value = `${scaleValueString}%`;
        const currentScaleStyle = scaleValueString / 100;

        imagePreview.style.transform = `scale(${currentScaleStyle})`;
      }
    } else if (evt.target === biggerScale) {
      if (100 >= scaleValueString + SCALE_COUNTER) {
        scaleValueString += SCALE_COUNTER;
        currentScale.value = `${scaleValueString}%`;
        const currentScaleStyle = scaleValueString / 100;

        imagePreview.style.transform = `scale(${currentScaleStyle})`;
      }
    }
  });
};

toScaleImage();

/* Наложение эффекта на картинку */

const effects = {
  'chrome' : 'grayscale(value)', /* с шагом 0.1; 0-1 */
  'sepia' : 'sepia(value)', /* с шагом 0.1;  0-1*/
  'marvin' : 'invert(value%)', /* с шагом 1%; 0-100% */
  'phobos' : 'blur(valuepx)', /* с шагом 0.1px; 0-3px */
  'heart' : 'brightness(value)', /* с шагом 0.1; 1-3px */
};


const sliderElement = imageUploadform.querySelector('.effect-level__slider');
const sliderValue = imageUploadform.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});
