document.addEventListener("DOMContentLoaded", function () {
  let elms = document.getElementsByClassName("splide");

  for (let i = 0; i < elms.length; i++) {
    new Splide(elms[i], {
      perPage: 4,
      breakpoints: {
        640: {
          perPage: 1,
        },
        1024: {
          perPage: 2,
        },
      },
    }).mount();
  }
});
