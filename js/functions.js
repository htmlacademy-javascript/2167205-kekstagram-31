// 1. Функция для проверки длины строки.

const checkLength = (string, maxLength) => string.length <= maxLength;


// Строка короче 20 символов
checkLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLength('проверяемая строка', 10); // false


// 2. Функция для проверки, является ли строка палиндромом


function isStringPolindrom(string) {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  const reversString = normalizeString.split('').reverse().join('');
  return normalizeString === reversString;
}

// Строка является палиндромом
isStringPolindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isStringPolindrom('ДовОд'); // true
// Это не палиндром
isStringPolindrom('Кекс'); // false
// Это палиндром
isStringPolindrom('Лёша на полке клопа нашёл '); // true

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
//Если в строке нет ни одной цифры, функция должна вернуть NaN:

function toNumber (string) {
  let numString = '';
  for (let i = 0; i < string.length; i++) {
    const num = string[i];

    if ('0' <= num && num <= '9') {
      numString += num;
    }

  }
  return parseInt(numString, 10);
}

toNumber('2023 год');// 2023
toNumber('ECMAScript 2022');// 2022
toNumber('1 кефир, 0.5 батона'); // 105
toNumber('агент 007');// 7
toNumber('а я томат');// NaN


/*
  Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true,
  если встреча не выходит за рамки рабочего дня, и false, если выходит.

  Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна.
  Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

  Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.
*/


const checkingTime = (dayStart, dayEnd, meetingStart, meetingLength) => {

  const parseTime = (time) => {
    const splited = time.split(':');
    return parseInt(splited[0], 10) * 60 + parseInt(splited[1], 10);
  };

  const dayStartMinute = parseTime(dayStart);
  const dayEndMinute = parseTime(dayEnd);
  const meetingStartMinute = parseTime(meetingStart);
  const meetingEndMinute = meetingLength + meetingStartMinute;

  if (dayStartMinute <= meetingStartMinute && meetingStartMinute <= dayEndMinute && meetingEndMinute <= dayEndMinute) {
    return true;
  } else {
    return false;
  }
};

checkingTime('8:00', '17:30', '14:00', 90);
/* console.log(checkingTime('8:0', '10:0', '8:0', 120));
console.log(checkingTime('08:00', '14:30', '14:00', 90));
console.log(checkingTime('14:00', '17:30', '08:0', 90));
console.log(checkingTime('8:00', '17:30', '08:00', 900)); */
