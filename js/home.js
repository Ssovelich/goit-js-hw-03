/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSides = values.split(' ');
// const rectArea = +rectSides[0] * +rectSides[1];

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         total += numbers[i];
//     }
    
// }

// console.log('numbers: ', numbers);
// console.log('total: ', total);


/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
// console.log(namesArray);
// console.log(phonesArray);
// for (let i = 0; i < namesArray.length; i++) {
//         console.log(namesArray[i], phonesArray[i])
// }
// let nameItem = 0;
// for (let i = 0; i < namesArray.length; i++) {
//     nameItem = namesArray[i];
//     console.log(nameItem)
// }
// let phoneItem = 0;
// for (let i = 0; i < phonesArray.length; i++) {
//     phoneItem = phonesArray [i]
//     console.log(phoneItem)
// }

// for (nameItem, phoneItem) in (namesArray, phonesArray) {
//     console.log(`username ${namesArray[i]}, phone number ${phonesArray[i]}`)
// }

// for (const nameItem of namesArray) {
//     console.log(nameItem)
// }
// for (const phoneItem of phonesArray) {
//      console.log(nameItem)
// }

// for (const name of names.split(',')) {
//     for (const phone of phones.split(',')) {
//     console.log(name)
//     console.log(phone)
// }
// }
// const item = names.split(',')
// const phone = phones.split(',')
// console.log(item)
// console.log(phone)
// for (let i = 0; i < item.length; i++) {
//    console.log(item[i])
// }
// for (let j = 0; j < phone.length; j++) {
//          console.log(phone[j])
        
//     }


/*
? Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
*/

// const string = 'Our office is closed so we`re working from home today.';
// const array = string.split(' ');
// console.log(array);
// const stringAfter = array.slice(1, array.length - 1).join(' ')

//     console.log(stringAfter);


/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = 0;
// for (let i = 0; i < values.length; i++) {
//    if (values[i] < min) {
//       min = values[i]
   
//    }
// }
// console.log(min);


/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// const union = managerSalaries.concat(developersSalaries)

// console.log(union)

// let total = 0;
// for (let i = 0; i < union.length; i++) {
//     total += union[i];
    
// }
// console.log(total)