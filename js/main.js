const container = document.querySelector(".container");
const toggleBtn = document.querySelector(".toggleBtn");

container.classList.add("collapsed");

toggleBtn.addEventListener("click", () => {
  container.classList.toggle("collapsed");
});
