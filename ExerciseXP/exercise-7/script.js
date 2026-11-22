const allBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "img1.jpg",
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "img2.jpg",
        alreadyRead: false
    }
];

const bookSection = document.querySelector('.listBooks');
const fragment = document.createDocumentFragment();

allBooks.forEach(book =>{
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-item');

    const bookImg = document.createElement('img');
    bookImg.src = book.image;
    bookImg.alt = `${book.title} cover`;
    bookImg.style.width = '100px';

    const bookDetail = document.createElement('p');
    bookDetail.textContent = `${book.title} written by ${book.author}`;

    if(book.alreadyRead){
        bookDetail.style.color = 'red';
    }

    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(bookDetail)

    fragment.appendChild(bookDiv);

});
bookSection.appendChild(fragment);