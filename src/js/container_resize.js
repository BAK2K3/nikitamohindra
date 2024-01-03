// Adjust the height of the fixed-height div
function adjustFixedHeightDiv() {
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const navbarHeight = document.getElementById("navbar").offsetHeight;

  const aboutVideoElement = document.getElementById("aboutMeVideo");
  const aboutbodyElement = document.getElementById("aboutMeBody");
  const homeBackgroundElement = document.getElementById("homeBackground");
  const homeSectionElement = document.getElementById("homeSection");

  if (aboutVideoElement && aboutbodyElement) {
    aboutVideoElement.style.height = windowHeight - navbarHeight + "px";
    aboutbodyElement.style.height = windowHeight - navbarHeight + "px";
  }

  if (homeBackgroundElement && homeSectionElement) {
    homeBackgroundElement.style.height = windowHeight - navbarHeight + "px";
    homeSectionElement.style.height = windowHeight - navbarHeight + "px";
  }
}

// Initial adjustment and listen for window resize
adjustFixedHeightDiv();
window.addEventListener("resize", adjustFixedHeightDiv);
