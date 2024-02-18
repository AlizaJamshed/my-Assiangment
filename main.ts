  // Assiangment  02

 var person_Name= "Eric";
console.log("Hello " + person_Name + ", would you like to learn some Python today?");

 // Task 3

  let personName = "Aliza";

console.log("To Upper Case:", personName.toUpperCase());
  console.log("To Lower Case:", personName.toLowerCase());
console.log("To Title Case:", personName.replace(/\b\w/g,c=> c.toUpperCase()));

    //  Assiangment  04

var famousPerson= "Albert Einstein";
console.log(famousPerson + ' once said, "A person who never made a mistake never tried anything new."');  

    //  Assiangment  05

var famous_Person= "Tipu Sultan";
var message= "'said,  One day's life of tiger is better than 100 years of a jackels life." ;
console.log(famous_Person + message);

   // Task 6
let person = "\t\n Aliza \t\n";
console.log("Original:" , person);
console.log("Stripped:", person.trim());

     //  Assiangment  07

console.log( 5 + 3 );
   console.log( 11 - 3 );
console.log( 4 * 2 );
   console.log( 16 / 2 );

    //  Assiangment  08
console.log("Addition:" , 5 + 3 );
  console.log("Subtraction:" , 11 - 3 );
console.log("Multiplication:" , 4 * 2 );
  console.log("Division:" , 16 / 2 );

   //  Assiangment  09

var number = 6 ;
console.log("My favourite number is " + number );


    //  Assiangment  10

// my this program will show some text  and a number which is 6
var number = 6 ;
console.log("My favourite number is " + number );

// this program will show aruthmetic operations like: Addition, Subtraction, Multiplication, Division 
console.log( 5 + 3 );
   console.log( 11 - 3 );
console.log( 4 * 2 );
   console.log( 16 / 2 );

   //  Assiangment  11

var names = ["Alisha" , "Saima" , "Aleena" , "Sara" , "Aliya" , "Madiha"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
 
   //  Assiangment  12  

var names = ["Alisha" , "Saima" , "Aleena" , "Sara" , "Aliya" , "Madiha"];
var message = "Do you like to read boks";
console.log(names[0] + " " +message );
console.log(names[1] + " " +message );
console.log(names[2] + " " +message );
console.log(names[3] + " " +message );
console.log(names[4] + " " +message );
console.log(names[5] + " " +message ); 

  //  Assiangment  13

let transportations = ["Honda Motorcycle", "Car", "Audi", "Scooter"];

transportations.forEach(item => {
  console.log(`I would like to own a ${item}. `);
});

// Task 14

let guests = ["Alisha", "Sara", "Hania", "Aleena"];
 guests.forEach (person => {
   console.log(`Dear ${person} You are invited to dinner with us, Please join us`);
});

 // task 15
  
 // Using variable from task 15
 console.log("Guests who can't atttend", guests[1]);
 
 guests[2] = "Ayesha"
 guests.forEach(person => {
   console.log(`Dear ${person}, you are invited to dinner with us`);
 });

   //Task 18
 
let places = ["Tokyo", "Paris", "New York", "Sydney", "Pakistan"];

console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Sorted in alphabetical order:", places);


places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", places);

// task 19 

// using Task 14 variable: guests

console.log(`There are ${guests.length} guests invited in dinner`);


  // Task 20

let cities = ["Karachi", "Islamabad", "Hydrabad", "Sukker"];

console.log("List of cities", cities );

// Task 21
const vegetables = {
      1: "Carrot",
      2: "Tomato",
      3: "Potatao",
      4: "Cabage"  
};
console.log(vegetables[2]);


// Task 24

console.log("hello" === "hello");
console.log("hello" !== "World");

console.log("Hello".toLowerCase() === "hello");
console.log("hello".toLowerCase() !== "world");

console.log( 54 === 54 );
console.log( 3 !== 10 );
console.log( 5 > 10 );
console.log( 11 < 10 );
console.log( 15 >= 10 );
console.log( 5 <= 10 );

console.log( 5===5 && 6===6);
console.log( 4===5 || 6===6  );



 // Task 25
var alien_color = "green";
if (alien_color === "green") {
   console.log('Player just earned 5 points');
}

var alien_color = "yellow";
if (alien_color === "green") {
  console.log('Player just earned 5 points');
}

// Task 26

var alien_color = "green";
if (alien_color === "green") {
   console.log("Player just earned 5 points for shooting the alien");
}  else {
   console.log('Player just earned 10 points');
}

var alien_color = "yellow";

if (alien_color === "green") {
  console.log('Player just earned 5 points for shooting the alien');
}  else { console.log('Player just earned 10 points');
  }


  // Task 28

  let age = 30;

if (age < 2) {
    console.log("The person is a baby.");
    }
 else if (age < 4) {
    console.log("The person is a toddler.");
     }
 else if (age < 13) {
    console.log("The person is a kid.");
     }
 else if (age < 20) {
    console.log("The person is a teenager.");
     } 
 else if (age < 65) {
    console.log("The person is an adult.");
    }
 else {
    console.log("The person is an elder.");
    }     

   // Task 30

    let usernames = ["admin", "Alice", "Bob", "Charlie", "David"];

    for (let user of usernames) {
      if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
      } else {
        console.log(`Hello ${user}, thank you for logging in again`);
      }
    }
    
   // Task 33

   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
  if (number === 1){
    console.log(`${number}st`);
  } else if (number ===2){
    console.log(`${number}nd`);
  } else if (number === 3){
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
}
}

// task 35
let animals =["cat", "dog", "rabbit"];

for  (animal of animals) {
  console.log(`A ${animals} would make a great pet.`);
}
console.log("Any of these animals would make a great pet");

  // Task 41

let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function  show_magician(magicians){
  for (let magician of magicians) {
    console.log(magician);
  }
}
show_magician(magicians);




