$(function(){
    // 設定
    var $width      = 950; // 横幅
    var $height     = 280; // 高さ
    var $interval   = 4000; // 切り替わりの間隔(ミリ秒)
    var $fade_speed = 1000; // フェード処理の早さ(ミリ秒)
     
    $("#fade_img").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
    $("#fade_img img").hide().css({"position":"absolute","top":0,"left":0});
    $("#fade_img img:first").addClass("active").show();
    setInterval(function(){
        var $active = $("#fade_img img.active");
        var $next = $active.next("img").length?$active.next("img"):$("#fade_img img:first");
        $active.fadeOut($fade_speed).removeClass("active");
        $next.fadeIn($fade_speed).addClass("active");
    },$interval);
});