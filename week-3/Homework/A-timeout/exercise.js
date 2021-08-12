/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const main = document.querySelector('#main');

setTimeout(() => { 
    main.style.backgroundColor = 'black';
    main.style.color = 'white';
},5000)

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];
let index = 0;

setTimeout(() => {
    setInterval(() => {
        if (index >= colors.length) {
            index = 0;
        }
        main.style.backgroundColor = colors[index];
        index++;
        main.style.color = colors[index];
    }, 5000);
},5000);