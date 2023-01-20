
// homeWork-14 / ivane_tvildiani

/* 
(_________1___________)
Creating Array with 3 elements 
*/
let aboutPersons = [
    {
        name: "Kaxa",
        age: 29,
        address: "Muxiani"
    },
    {
        name: "Mgelo",
        age: 38,
        address: "Gldani"
    },
    {
        name: "Msrolela",
        age: 41,
        address: "Varketili"
    },
];

/* 
(_________2___________)
It Outputs 3 String
*/

console.log(`My name is ${aboutPersons[0].name}, i am ${aboutPersons[0].age} old and living in ${aboutPersons[0].address}`)

/* 
(_________3___________)
if / else statement, Where we check the age.
*/
if (aboutPersons[0].age < 19) {
    console.log("I am a teenager");
} else {
    console.log("I am an adult");
}

/* 
(_________4___________)
For/Loop
*/

var loveCars = ["Mercedes-Benz", "BMW", "Audi", "Nissan", "Toyota"];

for (var i=0; i < loveCars.length; i++) {
    console.log(loveCars[i]);
}