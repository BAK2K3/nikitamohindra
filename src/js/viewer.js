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
      slideOnTouch: true,
    },
    title: [true, (image) => `${image.alt}`],
    transition: true,
  };

  const makingWavesGallery = new Viewer(
    document.getElementById("makingWavesImages"),
    gallerySettings
  );

  const ugbadGallery = new Viewer(
    document.getElementById("ugbadImages"),
    gallerySettings
  );

  const cosmosGallery = new Viewer(
    document.getElementById("cosmosImages"),
    gallerySettings
  );

  const londonGallery = new Viewer(
    document.getElementById("londonImages"),
    gallerySettings
  );

  const womanGallery = new Viewer(
    document.getElementById("womanImages"),
    gallerySettings
  );

  const legacyGallery = new Viewer(
    document.getElementById("legacyImages"),
    gallerySettings
  );

  document
    .getElementById("makingWavesHero")
    .addEventListener("click", function () {
      makingWavesGallery.show();
    });

  document.getElementById("ugbadHero").addEventListener("click", function () {
    ugbadGallery.show();
  });

  document.getElementById("cosmosHero").addEventListener("click", function () {
    cosmosGallery.show();
  });

  document.getElementById("londonHero").addEventListener("click", function () {
    londonGallery.show();
  });

  document.getElementById("womanHero").addEventListener("click", function () {
    womanGallery.show();
  });

  document.getElementById("legacyHero").addEventListener("click", function () {
    legacyGallery.show();
  });
});
