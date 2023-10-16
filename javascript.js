// task1
// let numbers = [5, 10, 15, 20, 25]

// function divide(callback, ...numbers) {

//     let toplam = numbers.reduce((eded, value) => eded + value, 0)
//     let middle = toplam / numbers.length
//     callback(middle)

// }

// function netice(middle) {
//     console.log(middle);
// }

// divide(netice, ...numbers)

// task2
// let toplam = 0
// let numbers = [23, 66, 10, 2, 88]
// sumOnly(result, ...numbers)

// function sumOnly(callback, ...numbers) {

//     for (let i = 0; i < numbers.length; i++) {

//         if (numbers[i] % 2 == 0) {
//             toplam += numbers[i]
//         }
//     }
//     callback(toplam);
// }
// function result(toplam) {
//     console.log(toplam);
// }


// task 3
// let toplam = 0
// let numbers = [22, 77, 80, 2, 9, 42]
// sumOnly(result, ...numbers)

// function sumOnly(callback, ...numbers) {

//     for (let i = 0; i < numbers.length; i++) {

//         if (numbers[i] % 2 !== 0) {
//             toplam += numbers[i]
//         }
//     }
//     callback(toplam);
// }
// function result(toplam) {
//     console.log(toplam);
// }

// task 4
// function findProduct(...numbers) {
// let arr = [...numbers];
// let cutToplam = 0
// let tekToplam = 0

//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] % 2 !== 0) {
//             tekToplam += arr[index];
//         }
//         else if (arr[index] % 2 === 0) {
//             cutToplam += arr[index]
//         }
//     }
//     return cutToplam * tekToplam
// }
// function searchProduct(callback, ...numbers) {
//     return callback(...numbers);
// }
// console.log(searchProduct(findProduct, 4, 6, 8, 3, 9, 10));