function renderBooks() {
    const booksWrapper = document.querySelector('.books');

    booksWrapper.innerHTML =
    `<div class="book">
  <figure class="book__img--wrapper">
    <img src="img/atomic habits.jpg" alt="" class="book__img" />
  </figure>
  <div class="book__title">Atomic Habits</div>
  <div class="book__ratings">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
  </div>
  <div class="book__price">
    <span class="book__price--normal">$59.95</span>
    $14.95
  </div>
  </div>`
}