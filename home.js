$("#overview").click(function(event){
  event.preventDefault();
  $(".circle-photo").animate({
    marginLeft: "0px"
  }, 1000);
  $(".description").delay(1000).fadeIn(1000);
});