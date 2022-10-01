var swiper = new Swiper(".mySwiper", { 
  //   slidesPerView: 3,
  // //		 slidesPerGroup:3,
  //     spaceBetween: 260,
      centeredSlides:true,
  //		grabCursor:true,
      loop: true,
  //      loopFillGroupWithBlank: true,
    autoplay: {
      delay:3500,
      disableOnInteration: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#btn-next",
        prevEl: "#btn-prev",
      },
  
      breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        1400: {
            slidesPerView: 2.5,
            spaceBetween: 220,
        }
    }
  });
  
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
  

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("innerGallery");
    let dots = document.getElementsByClassName("nav-arrow");
    // let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
