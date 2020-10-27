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

  $(document).keydown(function(event) {
    if(event.keyCode == 37){
      nextPrevimage("prev");
    } else if(event.keyCode == 39){
      nextPrevimage("next");
    }


  });

}); // <---  end doc ready


function nextPrevimage(direction) {
  var activeimage = $(".images img.active");
  var activeCircle = $(".nav i.active");

  activeimage.removeClass("active");
  activeCircle.removeClass("active");

  if(direction === "next"){
    if(activeimage.hasClass("last") === true){
      $(".images img.first").addClass("active");
      $(".nav i.first").addClass("active");
    } else {
      activeimage.next("img").addClass("active");
      activeCircle.next("i").addClass("active");
    }
  }


  else if(direction === "prev"){
    if(activeimage.hasClass("first") === true){
      $(".images img.last").addClass("active");
      $(".nav i.last").addClass("active");
    } else {
      activeimage.prev("img").addClass("active");
      activeCircle.prev("i").addClass("active");
    }
  }
}
