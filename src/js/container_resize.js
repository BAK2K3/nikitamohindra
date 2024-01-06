// Adjust the height of the fixed-height div
function adjustFixedHeightDiv() {
  const windowHeight = document.documentElement.clientHeight;
  const navbarHeight = document.getElementById("navbar").offsetHeight;

  const aboutVideoElement = document.getElementById("aboutMeVideo");
  const aboutbodyElement = document.getElementById("aboutMeBody");
  const homeBackgroundElement = document.getElementById("homeBackground");
  const homeBackgroundElement2 = document.getElementById("homeBackground2");

  const contactElement = document.getElementById("contactSection");

  if (aboutVideoElement && aboutbodyElement) {
    aboutVideoElement.style.height = windowHeight - navbarHeight + "px";
    aboutbodyElement.style.height = windowHeight - navbarHeight + "px";
  }

  if (homeBackgroundElement && homeBackgroundElement2) {
    homeBackgroundElement.style.height = windowHeight - navbarHeight + "px";
    homeBackgroundElement2.style.height = windowHeight - navbarHeight + "px";
  }

  if (contactElement) {
    contactElement.style.height = windowHeight - navbarHeight + "px";
  }
}

// Initial adjustment and listen for window resize
adjustFixedHeightDiv();
window.addEventListener("resize", adjustFixedHeightDiv);
