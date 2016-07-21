$(function(){
  var o = $("aside");
  var offset = o.offset();
  var topPadding = 30;

  $(window).scroll(function() {
    moveSidebar();
  });

  function moveSidebar(){
    if ($(window).scrollTop() > offset.top) {
        o.stop().animate({
            marginTop: $(window).scrollTop() - offset.top + topPadding
        });
    } else {
        o.stop().animate({
            marginTop: 0
        });
    };
  }

});


