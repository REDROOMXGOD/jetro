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
  function tabs(controlsClass, controlAttr, itemsClass, itemAttr) {
    $(controlsClass).click(function () {
      const neededItem = $(this).data(controlAttr);
      const activeItemClass = (itemsClass + "--active").slice(1);
      $(itemsClass).each(function () {
        $(this).data(itemAttr).includes(neededItem)
          ? $(this).addClass(activeItemClass)
          : $(this).removeClass(activeItemClass);
      });
    });
  }

  tabs(".portfolio-nav__button", "toggle", ".works-item", "category");
});
