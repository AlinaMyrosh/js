function foo() {
  const args = Array.from(arguments);
  return args.join("-");
}

console.log(foo(1, 2, 3));

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

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total = +order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getSlice(array, value) {
//   if (array.includes(value)) {
//     return array.slice(0, array.indexOf(value));
//   } else {
//     return [];
//   }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));

// const planets = "Jupiter";
// console.log(planets.slice(-1)); // "r"

// split

// function transformString(string) {
//   const words = string.split("_");
//   return words;
// }

// console.log(transformString("user_age")); // "user-age"
// console.log(transformString("price_per_droid")); // "price-per-droid"

// massive

// function getLastElementMeta(array) {
//   return [array.length - 1, array[array.length - 1]];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// function checkForName(fullName, firstName) {
//   fullNameNormalize = fullName.toLowerCase();
//   firstNameNormalize = firstName.toLowerCase();
//   return fullNameNormalize.includes(firstNameNormalize);
// }

// console.log(checkForName("Caty Stars", "cAtY"));

// // indexOf

// function getFileName(file) {
//   if (file.includes(".")) {
//     let fileNameLength = file.indexOf(".");
//     return file.slice(0, fileNameLength);
//   } else {
//     return file.slice(0);
//   }
// }

// console.log(getFileName("index.js"));

// // while

// // function calculateTotal(number) {
// //   let i = 0;
// //   let total = 0;
// //   while (i <= number) {
// //     total += i;
// //     i += 1;
// //   }
// //   return total;
// // }

// // console.log(calculateTota(24));

// // for

// function calculateTota(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTota(7));

// // decrement

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }

// console.log(calculateEvenTotal(3));

// break

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i < end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     console.log(number);
//     break;
//   }
// }

//  break and function

// function findNumberFromFive(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
//       break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumberFromFive(10, 6);
// console.log("Log after exiting function");

// function findNumberFromFive(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(
//         `Found the number ${target}, we make a return, interrupting the loop and function`
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumberFromFive(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);
