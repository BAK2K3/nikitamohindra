document.addEventListener("DOMContentLoaded", function () {
  const gallerySettings = {
    toolbar: {
      zoomIn: 1,
      zoomOut: 1,
      prev: 1,
      next: 1,
      rotateLeft: 4,
      rotateRight: 4,
      flipHorizontal: 4,
      flipVertical: 4,
    },
    title: [true, (image) => `${image.alt}`],
    transition: true,
  };

  const makingWavesGallery = new Viewer(
    document.getElementById("makingWavesImages"),
    gallerySettings
  );

  document
    .getElementById("makingWavesHero")
    .addEventListener("click", function () {
      makingWavesGallery.show();
    });
});
