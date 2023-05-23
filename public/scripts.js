$(document).ready(function () {
  var header = $(".header");

  setScroller();

  $(window).on("resize", function () {
    setScroller();
  });

  $(document).on("scroll", function () {
    setScroller();
  });

  function setScroller() {
    let windowWidth = $(window).width();
    if (windowWidth > 768) {
      let aboutVal = $(document).find(".about-section");
      let hasAbout = aboutVal.length;
      let windowHeight = $(window).height();
      let headerHeight = $(document).find(".header").innerHeight();

      if (hasAbout > 0) {
        aboutVal.css("height", windowHeight * 4);
        aboutVal.addClass("scrollingIn");

        let scrollTop = $(window).scrollTop() + headerHeight;
        let aboutTop = aboutVal.offset().top;
        let differenceinBoth = scrollTop - aboutTop;

        if (differenceinBoth > 0) {
          if (differenceinBoth < windowHeight * 3) {
            let addBy = parseInt(differenceinBoth / 2);
            let startAfter = 150;
            aboutVal.find(".reveal-img").css("position", "fixed");

            aboutVal.find(".reveal-bg").css("position", "fixed");

            aboutVal.find(".firstPanel-textarea").css("position", "fixed");

            aboutVal.find(".secondPanel-textarea").css("position", "fixed");

            aboutVal.find(".secondPanel-textarea").css("top", "");

            if (addBy > startAfter) {
              addBy = addBy - startAfter;
              aboutVal.find(".reveal-img").css("width", 60 + addBy + "%");

              aboutVal.find(".reveal-bg").css("width", 55 + addBy + "%");
              // console.log(differenceinBoth);

              if (addBy > 60) {
                aboutVal.find(".firstPanel-textarea").css("opacity", "0");
                aboutVal
                  .find(".firstPanel-textarea")
                  .css("visibility", "hidden");
              } else {
                aboutVal.find(".firstPanel-textarea").css("opacity", "");
                aboutVal.find(".firstPanel-textarea").css("visibility", "");
              }

              let secondShowOn = (windowHeight * 80) / 100;

              if (addBy > secondShowOn) {
                aboutVal.find(".secondPanel-textarea").css("opacity", "1");
                aboutVal
                  .find(".secondPanel-textarea")
                  .css("visibility", "visible");
              } else {
                aboutVal.find(".secondPanel-textarea").css("opacity", "");
                aboutVal.find(".secondPanel-textarea").css("visibility", "");
              }
            }
          } else {
            // console.log((windowHeight * 3), differenceinBoth);
            let scrollUpBy = parseInt(
              (windowHeight * 3 - differenceinBoth) / 2
            );
            aboutVal
              .find(".secondPanel-textarea")
              .css("top", "calc(55% + " + scrollUpBy + "px)");
            // console.log("asd");
          }
        } else {
          aboutVal.removeClass("scrollingIn");

          aboutVal.find(".reveal-bg").css("top", "");
          aboutVal.find(".reveal-img").css("width", "");
          aboutVal.find(".reveal-img").css("position", "");

          aboutVal.find(".reveal-bg").css("top", "");
          aboutVal.find(".reveal-bg").css("width", "");
          aboutVal.find(".reveal-bg").css("position", "");

          aboutVal.find(".firstPanel-textarea").css("position", "");

          aboutVal.find(".secondPanel-textarea").css("position", "");
        }
      }

      let goalVal = $(document).find(".ourGoal-section");
      let hasGoal = goalVal.length;
      if (hasGoal > 0) {
        goalVal.css("height", windowHeight * 4);
        goalVal.addClass("scrollingIn");

        let scrollTop = $(window).scrollTop() + headerHeight;
        let goalTop = goalVal.offset().top;
        let differenceinBoth = scrollTop - goalTop;

        if (differenceinBoth > 0) {
          if (differenceinBoth < windowHeight * 3) {
            let addBy = parseInt(differenceinBoth / 2);
            let startAfter = 0;
            goalVal.find(".reveal-img").css("position", "fixed");

            goalVal.find(".reveal-bg").css("position", "fixed");

            goalVal.find(".firstPanel-textarea").css("position", "fixed");

            goalVal.find(".secondPanel-textarea").css("position", "fixed");

            goalVal.find(".reveal-img").css("top", "");
            goalVal.find(".firstPanel-textarea").css("top", "");
            goalVal.find(".reveal-bg").css("top", "");

            goalVal
              .find(".secondPanel-textarea")
              .css("top", "calc(55% + " + headerHeight + "px)");
            goalVal
              .find(".secondPanel-textarea")
              .css("left", "calc(50% + 4px)");

            if (addBy > startAfter) {
              addBy = addBy - startAfter;
              let setWidth = 1350 - addBy;
              if (setWidth <= 60) {
                setWidth = 60;
              }
              // console.log(setWidth);
              goalVal.find(".reveal-img").css("width", setWidth + "%");
              goalVal.find(".reveal-bg").css("width", setWidth - 5 + "%");

              if (addBy > 500) {
                goalVal.find(".secondPanel-textarea").css("opacity", "0");
                goalVal
                  .find(".secondPanel-textarea")
                  .css("visibility", "hidden");
              } else {
                goalVal.find(".secondPanel-textarea").css("opacity", "");
                goalVal.find(".secondPanel-textarea").css("visibility", "");
              }

              goalVal.find(".firstPanel-textarea").css("opacity", "");
              goalVal.find(".firstPanel-textarea").css("visibility", "");
            }
          } else {
            let setWidth = 60;
            goalVal.find(".firstPanel-textarea").css("opacity", "1");
            goalVal.find(".firstPanel-textarea").css("visibility", "visible");

            goalVal.find(".reveal-img").css("width", setWidth + "%");
            goalVal.find(".reveal-bg").css("width", setWidth - 5 + "%");

            let scrollUpBy = parseInt(
              (windowHeight * 3 - differenceinBoth) / 2
            );
            goalVal
              .find(".reveal-img")
              .css("top", "calc(53% + " + scrollUpBy + "px)");
            goalVal
              .find(".reveal-bg")
              .css("top", "calc(53% + " + scrollUpBy + "px)");
            goalVal
              .find(".firstPanel-textarea")
              .css("top", "calc(68% + " + (headerHeight + scrollUpBy) + "px)");
          }
        } else {
          goalVal.removeClass("scrollingIn");

          goalVal.find(".reveal-bg").css("top", "");
          goalVal.find(".reveal-img").css("width", "");
          goalVal.find(".reveal-img").css("position", "");

          goalVal.find(".reveal-bg").css("top", "");
          goalVal.find(".reveal-bg").css("width", "");
          goalVal.find(".reveal-bg").css("position", "");

          goalVal.find(".firstPanel-textarea").css("position", "");

          goalVal.find(".secondPanel-textarea").css("position", "");
          goalVal.find(".secondPanel-textarea").css("top", "");
          goalVal.find(".secondPanel-textarea").css("left", "");
        }
      }
    } else {
      $(document).find(".about-section").css("height", "");
      $(document).find(".ourGoal-section").css("height", "");
    }
  }
});
