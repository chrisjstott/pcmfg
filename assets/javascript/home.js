$("#image-link").click(function(event){
  event.preventDefault();
  
  // remove clicked link
  $("#image-link").removeAttr("href");
  
  // shrink photo and slide to left
  $(".without-text").animate({
    left: "25px",
    top: "110px",
    height: $(window).height() - 135
  }, 1000);
  
  // fade out photo with text
  $(".with-text").animate({
    left: "25px",
    top: "110px",
    height: $(window).height() - 135,
    opacity: 0
  }, 1000);

  // slide text up
  $("#overview div").delay(300).animate({
    marginTop: "0px"
  }, 1000);
  
  // slide nav down
  $("header").animate({
    top: "0"
  }, 1000);
  
  // reveal other sections
  $(".hidden").show();
  
  // center contact text vertically
  $("#contact div").css("top", ($("#contact").height() - $("#contact div").height())/2);
});

$("header a").click(function(event) {
  event.preventDefault();
  $(window).scrollTo($(this).attr("href"), 1000, {
    offset: -85
  });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > $("#overview").height() + $("header").height() + 50 - $(this).height()) {
      
      // photo moves up when scrolling to next section
      $(".round-photo").css({
        "position": "absolute",
        "top": "auto",
        "bottom": "25px",
      });
    } else {
      
      // fix photo when scrolling within section
      $(".round-photo").css({
        "position": "fixed",
        "top": "110px"
      });
    }
});