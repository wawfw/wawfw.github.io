
$(function(){
  
  $(".trigger").click(function(){
     if($("form").is(":hidden")) {
        $("form").slideDown("normal");
        $(".trigger").text("お問い合わせ ▲");
     } else {
        $("form").slideUp("normal");
        $(".trigger").text("お問い合わせ ▼");
     }
    
    // if($("+form", this).css("display")=="none"){
    //   $("+form", this).slideDown("normal");
    //   $(".trigger").text("お問い合わせ▲");
    // } else {
    //   $("+form", this).slideUp("normal");
    //   $(".trigger").text("お問い合わせ▼");
    // }
  });
});
