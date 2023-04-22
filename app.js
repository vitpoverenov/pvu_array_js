const words = ['one', 'two','three'];
const numbers = [ 1, 2, 3, 4, 5] ;

numbers[numbers.length]=6;
numbers.push(7,8,9); /*Добавляет елемент к массиву *7* *8* *9* */
numbers.pop();/*Удаляет последний елемент из массива *9* */
numbers.shift();/*Удаляет первый елемент из массива *1* */

console.log(numbers)