let menu = document.getElementById("menu");
let closeMenuButton = document.getElementById("closeIcon");
let openMenuButton = document.getElementById("openIcon");
let navHeading = document.getElementById("navHeading");
let hamburgerMenu = document.getElementById("hamburgerMenu");
let instagramIcon = document.getElementById("instagramIcon");

function toggleMenu() {
  if (menu.classList.contains("closed")) {
    menu.classList.remove("w-0", "h-0", "opacity-0", "closed");
    menu.classList.add("w-screen", "h-screen", "opacity-95", "open");
    closeMenuButton.classList.remove("hidden");
    closeMenuButton.classList.add("flex");
    openMenuButton.classList.remove("flex");
    openMenuButton.classList.add("hidden");
    navHeading.classList.remove("text-customBlack");
    navHeading.classList.add("text-customWhite");
    hamburgerMenu.classList.remove(
      "text-customBlack",
      "border-customBlack",
      "stroke-customBlack"
    );
    hamburgerMenu.classList.add(
      "text-text-customWhite",
      "border-customWhite",
      "stroke-customWhite"
    );
    instagramIcon.classList.remove("text-customBlack");
    instagramIcon.classList.add("text-customWhite");
  } else {
    menu.classList.remove("w-screen", "h-screen", "opacity-95", "open");
    menu.classList.add("w-0", "h-0", "opacity-0", "closed");
    closeMenuButton.classList.remove("flex");
    closeMenuButton.classList.add("hidden");
    openMenuButton.classList.remove("hidden");
    openMenuButton.classList.add("flex");
    navHeading.classList.remove("text-customWhite");
    navHeading.classList.add("text-customBlack");
    hamburgerMenu.classList.remove(
      "text-text-customWhite",
      "border-customWhite",
      "stroke-customWhite"
    );
    hamburgerMenu.classList.add(
      "text-customBlack",
      "border-customBlack",
      "stroke-customBlack"
    );
    instagramIcon.classList.remove("text-customWhite");
    instagramIcon.classList.add("text-customBlack");
  }
}
