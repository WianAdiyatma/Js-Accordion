const arrows = document.querySelectorAll(".arrow");

function toggleArticle(event) {
  const accordion = event.target.closest(".accordion"); // Mencari elemen accordion terdekat
  const article = accordion.nextElementSibling; // Ambil elemen article setelahnya

  if (article) {
    article.classList.toggle("no-display");
  }
}

// Tambahkan event listener ke setiap arrow
arrows.forEach((arrow) => arrow.addEventListener("click", toggleArticle));
