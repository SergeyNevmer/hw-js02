// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
"use strict";

const findLongestWord = function (string) {
  let array = string.split(" ");
  let longest = "";
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
