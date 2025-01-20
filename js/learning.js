// function calcAverage() {
//   const args = Array.from(arguments);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return Math.round(total / args.length);
// }

// console.log(calcAverage(14, -4, 25, 8, 11));

// const values = "8 11";
// const sqare = Number(values.split(" ")[0]) * Number(values.split(" ")[1]);
// console.log(sqare);

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const numbers = [5, 10, 15, 20, 25];

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
//   return;
// });

// const temps = [14, -4, 25, 8, 11];

// console.log([...temps]);

// function add(...args) {
//   let total = 0;
//   for (let arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(15, 27));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const allPropValues = [];

//   for (let product of products) {
//     allPropValues.push(product[propName]);
//   }

//   return allPropValues;
// }

// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let productPrice;
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     } else {
//       productPrice = null;
//     }
//   }
//   return productPrice;
// }

// console.log(getProductPrice("Scanner"));

// function getCommonElements(array1, array2) {
//   let commonElement = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElement.push(array1[i]);
//     }
//   }
//   return commonElement;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
