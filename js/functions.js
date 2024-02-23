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
    let num = string[i];

    if ('0' <= num && num <= '9') {
      numString += num;
    }

  }
  return parseInt(numString);
};

console.log(toNumber('2023 год'));            // 2023
console.log(toNumber('ECMAScript 2022'));     // 2022
console.log(toNumber('1 кефир, 0.5 батона')); // 105
console.log(toNumber('агент 007'));           // 7
console.log(toNumber('а я томат'));           // NaN
