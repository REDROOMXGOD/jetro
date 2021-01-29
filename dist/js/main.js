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

  // portfolio filter buttons
  const portfolioItems = $(".works-item");

  $(".portfolio-nav__button").click(function () {
    const findedCategory = $(this).data("toggle"),
      buttonActiveClass = "portfolio-nav__button--active";
    $(`.${buttonActiveClass}`).removeClass(buttonActiveClass);
    $(this).addClass(buttonActiveClass);
    portfolioItems.each(function (i, item) {
      const itemCategory = $(this).data("category");
      $(this).css("display", "none");
      if (itemCategory === findedCategory) {
        $(this).css("display", "block");
      }
      if (findedCategory === "all") $(this).css("display", "block");
    });
  });
});
