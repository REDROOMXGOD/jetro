$(document).ready(function () {
  // init carousel buttons
  const carouselContainer = $(".carousel");
  $(".carousel-control-prev").click(function () {
    carouselContainer.carousel("prev");
  });
  $(".carousel-control-next").click(function () {
    carouselContainer.carousel("next");
  });
  // init carousel navigation
  $(".carousel-nav__image").each(function (id) {
    $(this).click(() => {
      carouselContainer.carousel(id);
    });
  });
});
