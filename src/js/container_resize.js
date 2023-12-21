// Adjust the height of the fixed-height div
function adjustFixedHeightDiv() {
  var windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  var navbarHeight = document.getElementById("navbar").offsetHeight;
  document.getElementById("aboutMeVideo").style.height =
    windowHeight - navbarHeight + "px";
  document.getElementById("aboutMeBody").style.height =
    windowHeight - navbarHeight + "px";
}

// Initial adjustment and listen for window resize
adjustFixedHeightDiv();
window.addEventListener("resize", adjustFixedHeightDiv);
