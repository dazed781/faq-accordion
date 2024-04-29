const accordions = document.querySelectorAll(".accordion");

accordions.forEach((e) => {

  // accordion elements - icons
  const minusIcon = e.querySelector(".minus-icon");
  const plusIcon = e.querySelector(".plus-icon");

  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      minusIcon.classList.add("active");
      plusIcon.classList.remove("active");
    } else {
      minusIcon.classList.remove("active");
      plusIcon.classList.add("active");
    }
  });
});