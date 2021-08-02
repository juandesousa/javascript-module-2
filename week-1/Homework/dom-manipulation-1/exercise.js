/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const p = document.querySelectorAll('p');
console.log(p);

const firstDiv = document.querySelector('div');
console.log(firstDiv);

const jumbotronText = document.querySelector('#jumbotron-text');
console.log(jumbotronText);

const pClass = document.querySelectorAll('.primary-content p');
console.log(pClass);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.querySelector('#alertBtn')

alertBtn.addEventListener('click' , (event) => {
    event.preventDefault()
    alert('Thanks for visiting Bikes for Refugees!')
})
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const bgrChangeBtn = document.querySelector('#bgrChangeBtn');
const body = document.querySelector('body');
let i = 0;

bgrChangeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const colors = ['orange', 'green','tomato','pink', 'white']
    
    if(i>4){
        i=0;
    }

    body.style.backgroundColor = colors[i];
    

    i++;
})

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const addTextBtn = document.querySelector('#addTextBtn');
const h2 = document.querySelector('h2')

addTextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const p = document.createElement('p')
    h2.appendChild(p);
    p.innerText = 'LEARN MORE';
    
})


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinksBtn = document.querySelector('#largerLinksBtn');
const a = document.querySelectorAll('a')

largerLinksBtn.addEventListener('click', (event) => {
    event.preventDefault();
    a.forEach(link => {
        let size = parseInt(link.style.fontSize);
        size ++
        if(size>5){
            size = 1
        }
        link.style.fontSize = `${size}em`
    })
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addArticleBtn = document.querySelector('#addArticleBtn');
const mainArticles = document.querySelector('#mainArticles')

addArticleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let input = document.querySelector('input')
    const p = document.createElement('p')
    const article = document.createElement('article')
    article.className = 'article'
    mainArticles.appendChild(article);
    article.appendChild(p);
    p.innerText = input.value;
    input.value = '';
})
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

