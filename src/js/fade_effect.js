document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(".fade-effect");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  textElements.forEach((element) => {
    observer.observe(element);
  });
});
