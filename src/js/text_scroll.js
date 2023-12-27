document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(
    ".text-container, .text-divider, .about-image"
  );

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
      threshold: 0.4, // Adjust this threshold as needed
    }
  );

  textElements.forEach((element) => {
    observer.observe(element);
  });
});
