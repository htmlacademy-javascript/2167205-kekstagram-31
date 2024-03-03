const DESCRIPTION = [
  'Если меня поставят перед выбором: пиво или душа, я сначала поинтересуюсь какое пиво - (с) Джейсон Стетхем.',
  'Однажды я пропустил два дня в школе, теперь их называют, суббота и воскресенье - (с) Арнольд Шварцнегер.',
  'Порой я на верном пути к правильному выводу, но я прохожу мимо - (с) Альберт Эйнштейн.',
  'Всегда думай о том, чего хочешь, но не думай о том, чего не хочешь - (с) Фридрих Ницше.',
  'Это мой последний заезд - (с) Доминик Торетто.',
  'Если выбор между камнем ножницами и бумагой, я всегда выбераю камень - (с) Дуэйн \"Скала\" Джонсон',
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];


const createComment = () => {
  const getRandomCommentId = getRandomInteger(1, 999);
  const getRandomAvatar = getRandomInteger(1, 6);

  return {
    id: getRandomCommentId,
    avatr: `img/avatar-${getRandomAvatar}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  };
};

const createPost = () => {
  const getRandomId = getRandomInteger(1, 25);
  const getRandomPhoto = getRandomId;
  const getRandomLikes = getRandomInteger(12, 200);
  const comment = Array.from({ length: getRandomInteger(0, 30) }, createComment);

  return {
    id: getRandomId,
    url: `photos/${getRandomPhoto}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomLikes,
    comments: comment,
  };
};

const posting = Array.from({ length: 25}, createPost);
console.log(posting);
