
//----------------------
let a = 7;

if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}


//----------------------
let bookCount = 10;

for (let i = 0; i < bookCount; i++) {
  // ide kerül a kód, ami mozgatja a könyveket
  // ez a "ciklus magja", ami "bookCount"-szor fog végrehajtódni
}


//----------------------
console.log('Hello World!');
console.log('My name is Lajos Pauló');

let sampleCount = 10;

for (let i = 0; i < sampleCount; i++) {
  console.log(i);
}

for (let i = 1; i <= sampleCount; i++) {
  console.log(i);
}

for (let i = 0; i < sampleCount; i++) {
  console.log(i * 2);
}


//----------------------
let payBill = (amount, beneficiary) => {
  // "amount" mennyiségű pénz átutalása "beneficiary" számára
};

let add = (a, b) => {
  return a + b;
  // a "return" kulcsszó miatt a függvény "visszaadja"
  // az összeadás eredményét
};

console.log(add(1, 2)) // kimenet: 3

let printNumbersTill = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};

printNumbersTill(20); // kimenet: 1, 2, ...., 20
printNumbersTill(15); // kimenet: 1, 2, ...., 15

let getGreetingTo = (who) => {
  return `Hello ${who}!`;
}

getGreetingTo('Mark');              // kimenet: semmi
console.log(getGreetingTo('Mark')); // kimenet: 'Hello Mark!'


//----------------------
function printValues(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printValues([0, 3, 6, 7, 9]);

let myNumbers = [10, 20, 30, 50, 12];

// itt kijelentjük, hogy a tömb minden elemén szeretnénk valamit végrehajtani
myNumbers.forEach((number) => {
  // a függvényen belül adhatjuk meg a végrehajtandó műveleteket
  console.log(number);
});

function printValuesTwo(myArray) {
  myArray.forEach((number) => {
    // a függvényen belül adhatjuk meg a végrehajtandó műveleteket
    console.log(number);
  });
}

printValuesTwo([1, 4, 7, 8, 10]);


