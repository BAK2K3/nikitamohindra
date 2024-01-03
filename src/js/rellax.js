window.addEventListener("load", () => {
  const relax = document.querySelectorAll(".rellax");

  if (relax.length > 0) {
    const rellax = new Rellax(".rellax");
    console.log(rellax);
  }
});
