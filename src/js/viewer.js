document.addEventListener("DOMContentLoaded", function () {
  const makingWavesGallery = new Viewer(
    document.getElementById("makingWavesImages")
  );

  document
    .getElementById("makingWavesHero")
    .addEventListener("click", function () {
      makingWavesGallery.show();
    });
});
