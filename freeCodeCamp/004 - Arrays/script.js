const ourArray = [
  ["Thiago", 15],
  ["Felipe", 31],
];

console.log(ourArray[0]);

// Functions:
/* 
    push(); Adiciona um elemento ao final do array
    unshift(); Adiciona um elemento ao início do array
    pop(); Remove o último array
    shift(); Remove o primeiro array
*/

const myArray = ["Felipe", 15, "Casado"];
myArray.shift();
myArray.pop();

// -------------------------

myArray.unshift("Thiago");
myArray.push("Solteiro");

console.log(myArray);

// -------------------------

const shoppingList = [
  ["butter", 3],
  ["milk", 5],
  ["donuts", 8],
  [
    ["orangeJuice", 3],
    ["appleJuice", 5],
    ["limonJuice", 2],
  ],
];

shoppingList[3][2].pop();
shoppingList[3][2].push(4);

console.log(shoppingList);
