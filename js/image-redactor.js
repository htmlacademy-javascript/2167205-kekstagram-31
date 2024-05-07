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
  'chrome': 'grayscale(value)', /* с шагом 0.1; 0-1 */
  'sepia': 'sepia(value)', /* с шагом 0.1;  0-1*/
  'marvin': 'invert(value%)', /* с шагом 1%; 0-100% */
  'phobos': 'blur(valuepx)', /* с шагом 0.1px; 0-3px */
  'heat': 'brightness(value)', /* с шагом 0.1; 1-3px */
};

let selectedEffect = 'none';

const sliderElement = imageUploadform.querySelector('.effect-level__slider');
const sliderValueElement = imageUploadform.querySelector('.effect-level__value');
const effectsList = imageUploadform.querySelector('.effects__list');

sliderValueElement.value = 0.1;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0.1,
  step: 0.1,
  connect: 'lower',
});


sliderElement.noUiSlider.on('update', () => {
  sliderValueElement.value = sliderElement.noUiSlider.get();
  if (selectedEffect === 'none') {
    /* sliderElement.noUiSlider.destroy(); */
    sliderElement.classList.add('hidden');
  } else {
    sliderElement.classList.remove('hidden');
    /* задать выбранный фильтр и выставленное значение на слайдере */
    imagePreview.style.filter = effects[selectedEffect].replace('value', sliderValueElement.value);
  }
});

effectsList.addEventListener('change', (evt) => {
  selectedEffect = evt.target.value;
  switch (selectedEffect) {
    case 'none':
      sliderElement.classList.add('hidden');
      imagePreview.style.filter = '';
      break;
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0.1,
        step: 0.1,
      });
      break;
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0.1,
        step: 0.1,
      });
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 1,
        step: 1,
      });
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 0.1,
        step: 0.1,
      });
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 0.1,
        step: 0.1,
      });
  }
});

