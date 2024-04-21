import { imageUploadform, hashtagValueElement, commentValueElement } from './form.js';

const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;

const errorMessage = {
  Hashtag:
  {
    INVALID_HASHTAG: 'введен невалидный хэштег',
    BIG_QUANTITY: 'превышено количество хэштегов',
    REPEAT_HASHTAG: 'повторяющиеся хэштеги'
  },
  Comment:
  {
    BIG_COMMENT_LENGTH: `длинна комментария больше ${MAX_COMMENT_LENGTH} символов`
  }
};

const validation = (imageUploadform, hashtagValueElement, commentValueElement) => {
  let message = '';
  const getMessage = () => message;

  const pristine = new Pristine(imageUploadform, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    errorTextParent: 'img-upload__field-wrapper',
  });

  const validateHashtags = (hashtagsString) => {
    const trimmedHashtagString = hashtagsString.trim();
    if (!trimmedHashtagString) {
      return true;
    } else {
      const hashtags = trimmedHashtagString.split(' ').filter((value) => value);

      if (hashtags.length > MAX_HASHTAG_COUNT) {
        message = errorMessage.Hashtag.BIG_QUANTITY;
        return false;
      }

      if (!hashtags.every((hashtag) => /^#[a-zа-яё0-9]{1,20}$/i.test(hashtag))) {
        message = errorMessage.Hashtag.INVALID_HASHTAG;
        return false;
      }

      if (hashtags.some((value, index, hashtagsArray) => hashtagsArray.indexOf(value) !== index)) {
        message = errorMessage.Hashtag.REPEAT_HASHTAG;
        return false;
      }
      return true;
    }
  };

  function validateComments(value) {
    if (value.length > MAX_COMMENT_LENGTH) {
      message = errorMessage.Comment.BIG_COMMENT_LENGTH;
      return false;
    } else {
      return true;
    }
  }

  pristine.addValidator(hashtagValueElement, validateHashtags, getMessage);

  pristine.addValidator(commentValueElement, validateComments, getMessage);

  return pristine.validate();
};


export { validation };
