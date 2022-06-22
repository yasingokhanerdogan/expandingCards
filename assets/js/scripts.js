const cards = document.querySelectorAll(".page-wrapper .card");

const removeActiveClasses = () => {
  cards.forEach((item) => item.classList.remove("active"));
};

cards.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeActiveClasses();
    item.classList.add("active");
  });
});
