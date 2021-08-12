/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(people => {
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.innerText = people.name;
    h2.innerText = people.job;
    content.appendChild(h1)
    content.appendChild(h2)
  })
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  const content = document.querySelector("#content");
  const uList = document.createElement('ul');
  content.appendChild(uList);
  shopping.forEach(shop => {
    const list = document.createElement('li');
    list.innerText = shop;
    uList.appendChild(list);
  })
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  const content = document.querySelector("#content");
  const uList = document.createElement('ul');
  const img1 = "https://images.squarespace-cdn.com/content/v1/58f3d400725e25b08cdcb9df/1566397801087-Q4PLIK7PKNITKZZD65P9/ke17ZwdGBToddI8pDm48kJEPCC8nQiv_RAubk74wwq0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2a4ZGrNreUw59RLnQGbjShGqiR0LKKvF0PhpRYHaAfccKMshLAGzx4R3EDFOm1kBS/design-everyday-things.png"
  const img2 = "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
  const img3 = "https://m.media-amazon.com/images/I/41uPjEenkFL._SX260_.jpg"
  const images = [img1,img2,img3]

  content.appendChild(uList);
  uList.style.display = 'flex';

  books.forEach((book, index) => {
    const p = document.createElement('p');
    const li = document.createElement('li');
    const img = document.createElement('img');

    uList.appendChild(li);
    li.appendChild(p);
    li.appendChild(img);
    
    p.innerText = `Title: ${book.title} \n Author: ${book.author}`;
    img.src = images[index];
    
    book.alreadyRead ? li.style.background = 'green' : li.style.background = 'red';

    li.style.width = "350px";
    li.style.listStyle = "none";
    li.style.margin = "10px";
    li.style.padding = "5px";
    p.style.fontWeight = "bold";
    img.style.height = "280px";
  })
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
