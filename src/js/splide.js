document.addEventListener("DOMContentLoaded", function () {
  const splides = document.querySelectorAll(".splide");

  if (splides.length) {
    const splideDefaultOptions = {
      rewind: true,
      heightRatio: 1.5,
      perPage: 1,
      perMove: 1,
      gap: 10,
      pagination: false,
      focus: "center",
      mediaQuery: "min",
      breakpoints: {
        450: {
          heightRatio: 1.2,
        },
        640: {
          heightRatio: 1.0,
        },
        768: {
          heightRatio: 0.8,
        },
        1024: {
          heightRatio: 0.5,
          perPage: 2,
          perMove: 3,
          rewind: true,
          gap: 10,
          pagination: false,
          focus: "center",
        },
      },
    };

    for (let i = 0; i < splides.length; i++) {
      const splideElement = splides[i];
      const splide = new Splide(splideElement, splideDefaultOptions);
      splide.mount();
    }
  }
});
