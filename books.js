function renderBooks(filter) {
    const booksWrapper = document.querySelector(".books");

    const books = getBooks();

    if (filter === 'LOW_TO_HIGH') {
        console.log(filter)
        books.sort((a, b) => a.originalPrice - b.originalPrice)
    }

    const booksHTML = books                                                                                                                   
    .map((book) => {
        return `<div class ="book">
        <figure class="book__img--wrapper">
        <img class="book__img"  src="${book.url}" alt="">
        </figure>
        <div class="book__title">
        ${book.title}
        </div>
        <div class="book__ratings">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="book__price">
        <span>$${book.originalPrice.toFixed(2)}</span>
        </div>
        </div>`;

    })
    .join("");

    booksWrapper.innerHTML = booksHTML;
}

function filterBooks(event) {
   renderBooks(event.target.value);
  
}

setTimeout(() => {
    renderBooks();
});
// Fake data

function getBooks() {
    return [
          {
            id: 1,
            title: "Crack the Coding Interview",
            url: "img/crack the coding interview.png",
            originalPrice: 45.95,
            salePrice: 14.95,
            rating: 4.5,
          },
          {
            id: 2,
            title: "Atomic Habits",
            url: "img/atomic habits.jpg",
            originalPrice: 39.50,
            salePrice: null,
            rating: 5,
          },
          {
            id: 3,
            title: "Deep Work",
            url: "img/deep work.jpeg",
            originalPrice: 29,
            salePrice: 12,
            rating: 5,
          },
          {
            id: 4,
            title: "The 10X Rule",
            url: "img/book-1.jpeg",
            originalPrice: 44,
            salePrice: 19,
            rating: 4.5,
          },
          {
            id: 5,
            title: "Be Obsessed Or Be Average",
            url: "img/book-2.jpeg",
            originalPrice: 32,
            salePrice: 17,
            rating: 4,
          },
          {
            id: 6,
            title: "Rich Dad Poor Dad",
            url: "img/book-3.jpeg",
            originalPrice: 70,
            salePrice: 12.5,
            rating: 5,
          },
          {
            id: 7,
            title: "Cashflow Quadrant",
            url: "img/book-4.jpeg",
            originalPrice: 11,
            salePrice: 10,
            rating: 4,
          },
          {
            id: 8,
            title: "48 Laws of Power",
            url: "img/book-5.jpeg",
            originalPrice: 38,
            salePrice: 17.95,
            rating: 4.5,
          },
          {
            id: 9,
            title: "The 5 Second Rule",
            url: "img/book-6.jpeg",
            originalPrice: 35,
            salePrice: null,
            rating: 2,
          },
          {
            id: 10,
            title: "Your Next Five Moves",
            url: "img/book-7.jpg",
            originalPrice: 40,
            salePrice: null,
            rating: 4,
          },
          {
            id: 11,
            title: "Mastery",
            url: "img/book-8.jpeg",
            originalPrice: 30,
            salePrice: null,
            rating: 4.5,
          },
        ];

  }
  