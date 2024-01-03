document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    perPage: 1,
    perMove: 1,
    gap: 10,
    pagination: false,
    focus: "center",
    mediaQuery: "min",
    breakpoints: {
      1000: {
        perPage: 2,
        perMove: 3,
      },
    },
  });
  splide.mount();
});
