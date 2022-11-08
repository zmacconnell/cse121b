/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

let myName = "Zach MacConnell";
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector("#name").textContent = myName;
// Step 3: declare and instantiate a variable to hold the current year

let currentYear = 2022;
// Step 4: place the value of the current year variable into the HTML file

document.querySelector("#year").textContent = currentYear;
// Step 5: declare and instantiate a variable to hold the name of your picture

let myPicture = "images/main.png"
// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector("img").src = myPicture;


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let favoriteFoods = ["pizza", "hamburgers"];
// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector("#food").textContent = favoriteFoods;
// Step 3: declare and instantiate a variable to hold another favorite food

let newFood = "sandwiches";
// Step 4: add the variable holding another favorite food to the favorite food array

favoriteFoods.push(newFood);
// Step 5: repeat Step 2

document.querySelector("#food").textContent = favoriteFoods;
// Step 6: remove the first element in the favorite foods array

favoriteFoods.shift();
// Step 7: repeat Step 2

document.querySelector("#food").textContent = favoriteFoods;
// Step 8: remove the last element in the favorite foods array

favoriteFoods.pop()
// Step 7: repeat Step 2

document.querySelector("#food").textContent = favoriteFoods;

