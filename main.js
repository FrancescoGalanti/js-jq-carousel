/**
****** javascript
*/



$(document).ready( function() {

  $(".next").click(function(){
    nextPrevimage("next");
  });

  $(".prev").click(function(){
    nextPrevimage("prev");
  })

}); // end doc ready


function nextPrevimage(direction) {
  var activeimage = $(".images img.active");
  var activeCircle = $(".nav i.active");

  activeimage.removeClass("active");
  activeCircle.removeClass("active");

  if(direction === "next"){
    if(activeimage.hasClass("last") === true){
      $(".images img .first").addClass("active");
      $(".nav i.first").addClass("active");
    } else{
      activeimage.next("img").addClass("active");
      activeCircle.next("i").addClass("active");
    }
  }
}
