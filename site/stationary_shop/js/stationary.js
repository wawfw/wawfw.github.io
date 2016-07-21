
$(document).ready(function(){
  // fancybox
  $('.fancybox-galleryBox').attr('rel', 'gallery').fancybox({
    padding: 0,
  });

  //navgation
  // ナビゲーションのリンクを指定
  var navLink = $('#nav-content li a');
  var navLinkLi = $('#nav-content li');

  var contentsArr = new Array();

  for (var i = 0; i < navLink.length; i++) {
      // コンテンツのIDを取得
      var targetContents = navLink.eq(i).attr('href');
      // ページ上部からコンテンツの開始位置までの距離を取得
      var targetContentsTop = Math.floor($(targetContents).offset().top);
      // ページ上部からコンテンツの終了位置までの距離を取得
      var targetContentsBottom =targetContentsTop + $(targetContents).outerHeight(true) - 1;
      // 配列に格納
      contentsArr[i] = [targetContentsTop, targetContentsBottom]
  };

  // 現在地をチェックする
  function currentCheck() {
    // 現在のスクロール位置を取得
    var windowScrolltop = $(window).scrollTop();

    for (var i = 0; i < contentsArr.length; i++) {
        // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
      if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
        // 開始位置と終了位置の間にある場合、ナビゲーションにclass="active"をつける
    
        navLinkLi.removeClass('active');
        navLinkLi.eq(i).addClass('active');

        break;
      }
    };
  }

  // ページ読み込み時とスクロール時に、現在地をチェックする
  $(window).on('load scroll', function() {
      currentCheck();
  });

  // ナビゲーションをクリックした時のスムーズスクロール
  navLink.click(function() {
      $('html,body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 300);
      
      return false;
  });

});


