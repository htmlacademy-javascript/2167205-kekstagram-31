import { getRandomInteger, getRandomArrayElement, craeteUniqueId, generateCountOfPhoto } from './util.js';

const DESCRIPTION = [
  'Если меня поставят перед выбором: пиво или душа, я сначала поинтересуюсь какое пиво - (с) Джейсон Стетхем.',
  'Однажды я пропустил два дня в школе, теперь их называют, суббота и воскресенье - (с) Арнольд Шварцнегер.',
  'Порой я на верном пути к правильному выводу, но я прохожу мимо - (с) Альберт Эйнштейн.',
  'Всегда думай о том, чего хочешь, но не думай о том, чего не хочешь - (с) Фридрих Ницше.',
  'Это мой последний заезд - (с) Доминик Торетто.',
  'Если выбор между камнем ножницами и бумагой, я всегда выбераю камень - (с) Дуэйн Джонсон',
  'Дошик готовится три минуты, а я готов всегда - (c) Стивен Сигал'
];

const NAME = [
  'Люция',
  'Константин',
  'Сергей',
  'Аида',
  'Иван',
  'Людмила',
  'Эмилия',
  'Владислава',
  'Савелий',
  'Вадим',
  'Николай',
  'Оливия',
  'Руслана',
  'Альбина',
  'Дмитрий',
  'Веста',
  'Аркадий',
  'Василиса',
  'Жан Батист',
  'Леонида',
  'Татьяна',
  'Ада',
  'Надежда',
  'Леонид',
  'Яков'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const generateId = generateCountOfPhoto();
const generatePhotoId = generateCountOfPhoto();
const generateCommentId = craeteUniqueId(0, 30);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger}.svg`,
  message: `${getRandomArrayElement(MESSAGE)}`,
  name: `${getRandomArrayElement(NAME)}`,
});

const createPost = () => ({
  id: generateId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTION)}`,
  likes: `${getRandomInteger(15, 200)}`,
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

const posting = () => Array.from({ length: 25 }, createPost);

export { posting };
