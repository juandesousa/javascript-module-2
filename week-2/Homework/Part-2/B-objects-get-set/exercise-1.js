/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
};

// YOUR CODE HERE
let arr = Object.entries(kitten);

arr.forEach(element => console.log(element[1]))

for (let i in kitten){
    console.log(kitten[i])
}