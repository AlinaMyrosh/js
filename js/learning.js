class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  blacklistedEmails = [];

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
//
//
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email);

//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"
// //
// //
// //
// // Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost("post-1");
// editor.addPost("post-2");
// console.log(editor.posts); // ['post-1', 'post-2']

//
//
//
//
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
//
//
//
//
//
//
//
//
// ----------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];

// const changeRating = (books) => {
//   return books.map((book) => {
//     book.rating = 5;
//   });
// };

// console.log(changeRating(books));

// -------------------------------------
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((firstAuthor, secondAuthor) =>
//     firstauthor.localeCompare(secondauthor)
//   );

// ---------------------цепочка методов-----------------------------
// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// ------------------reduce-------------------------------
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce(
//   (previousValue, playtime) => previousValue + playtime,
//   0
// );

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);

// --------------------filter-----------------------
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => !(number % 2));
// const oddNumbers = numbers.filter((number) => number % 2);
// console.log(evenNumbers);
// console.log(oddNumbers);

// -----------------map-----------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
// ];

// const getUserEmails = (array) => users.map((user) => user.email);
// console.log(getUserEmails(users));

// ----------------------------------
// function calc(a, b, callback) {
//   const res = callback(a, b);
//   console.log(res);
// }

// calc(2, 5, function (x, y) {
//   return x + y;
// });

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
