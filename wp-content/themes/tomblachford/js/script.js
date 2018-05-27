(function ($) {
  "use strict";
  $(document).ready(function () {
    // Animation
    $(".animsition, a.btn").animsition({
      inClass: "fade-in",
      outClass: "fade-out",
      inDuration: 800,
      outDuration: 800,
      //linkElement: '.menu-item a',
      linkElement: 'a:not([target="_blank"]):not([href^="#"])',
      loading: true,
      loadingParentElement: "body", //animsition wrapper element
      loadingClass: "animsition-loading",
      loadingInner: "", // e.g '<img src="loading.svg" />'
      timeout: true,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ["animation-duration", "-webkit-animation-duration"],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay: false,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "body",
      transition: function (url) {
        window.location.href = url;
      }
    });

    // mobile navigation
    $(".burger").on("click", function (e) {
      e.preventDefault();
      if (!$(this).hasClass("open")) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    function openMenu() {
      $(".menu-bg").addClass("animate");
      $(".burger, .logo").addClass("open");
      $(".x, .z").addClass("collapse-icon");
      $(".main-menu").addClass("animate");
      $("body").css({
        overflow: "hidden",
        height: "100vh"
      });

      setTimeout(function () {
        $(".y").hide();
        $(".x").addClass("rotate30");
        $(".z").addClass("rotate150");
      }, 70);
      setTimeout(function () {
        $(".x").addClass("rotate45");
        $(".z").addClass("rotate135");
      }, 120);
      setTimeout(function () {
        $(".main-menu").addClass("opened");
      }, 650);
    }

    function closeMenu() {
      $(".main-menu").removeClass("animate");
      $(".main-menu").removeClass("opened");
      $("body").css({
        overflow: "",
        height: "auto"
      });

      setTimeout(function () {
        $(".burger, .logo").removeClass("open");
        $(".x")
          .removeClass("rotate45")
          .addClass("rotate30");
        $(".z")
          .removeClass("rotate135")
          .addClass("rotate150");
        $(".menu-bg").removeClass("animate");

        setTimeout(function () {
          $(".x").removeClass("rotate30");
          $(".z").removeClass("rotate150");
        }, 50);
        setTimeout(function () {
          $(".y").show();
          $(".x, .z").removeClass("collapse-icon");
        }, 70);
      }, 100);
    }

    // Home Main Height
    function mainHeight() {
      var headerHeight = $("#header").height();
      console.log(headerHeight);
      var footerHeight = $("#footer").outerHeight();
      var winHeight = $(window).height();
      var main = winHeight - headerHeight - footerHeight;
      $(".home .home-image").css({
        height: main
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
          $("#header").css({
            backgroundColor: "#181409"
          });
          $("#header a,#header .svg path").css({
            color: '#b3b3b3',
            fill: '#b3b3b3',
          });
          $(".x,.y ,.z").css({
            background: '#b3b3b3'
          });
        } else {
          $("#header, #header a,#header .svg path").css({
            backgroundColor: ''
          });
          $("#header a,#header .svg path").css({
            color: '',
            fill: ''
          });
          $(".x,.y ,.z").css({
            background: ''
          });
        }
      });
    }
    mainHeight();
    $(window).on("resize", function () {
      mainHeight();
    });

    // Change svg color inside img tag
    $("img.svg").each(function () {
      var $img = $(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");

      $.get(
        imgURL,
        function (data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find("svg");

          // Add replaced image's ID to the new SVG
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr("xmlns:a");

          // Check if the viewport is set, else we gonna set it if we can.
          if (!$svg.attr("viewBox") &&
            $svg.attr("height") &&
            $svg.attr("width")
          ) {
            $svg.attr(
              "viewBox",
              "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
            );
          }

          // Replace image with new SVG
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  });
})(jQuery);