$(document).ready(function () {
    $("ul.navbar-nav > li > a").click(
      function (e) {
        $("ul.navbar-nav > li").removeClass(
          "active");
        $("ul.navbar-nav > li > a").css(
          "color", "");

        $(this).addClass("active");
        $(this).css("color", "#FF6000");
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });