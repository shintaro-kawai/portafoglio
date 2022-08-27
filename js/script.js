// Google Fonts
WebFont.load({ google: { families: ["Sen:regular,700,800:latin,latin-ext"] } });

// スマホの画面サイズ取得
const sp_size = document.write("screen.width " + screen.width + "、" + "screen.height " + screen.height);
console.log(sp_size);

// slick.js
// =========================
$(function () {
  $('#mas-slick').slick({
    arrows: true,           // 矢印は表示
    dots: true,             // ドット表示
    appendDots: $('.master-dots'), // ドットナビゲーションの生成位置を変更
    speed: 500,             // フェードアニメーションの速度
    slidesToShow: 3,        // 表示するスライドの枚数
    centerMode: true,       // 前後のスライドを部分的に表示
    variableWidth: false,   // 一定幅以上で前後のスライドを表示するスライダー
    slidesToScroll: 3,      // 一度にスクロールするスライドの数
    autoplay: true,         // 自動再生
    autoplaySpeed: 2000,    // 再生速度（ミリ秒） 
    centerPadding: '10%',   // 両端に見切れるスライド幅 
    infinite: true,         // 無限再生
    responsive: [
      {
        breakpoint: 767,     // 766px以下のサイズに適用
        settings: {
          slidesToShow: 1,   // 表示するスライドの枚数
          slidesToScroll: 1, // 一度にスクロールするスライドの数
          centerPadding: 0,  // 両端に見切れるスライド幅
          centerMode: true,  // 前後のスライドを部分的に表示
        }
      }
    ]
  });
});

// header > nav
// =====================
$(function () {
  $('#nav-btn').on('click', function () {
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});

// FAQ
// =====================
$(function () {
  $('.js-accordion').on('click', function () {
    $(this).next().slideToggle();
  })
});

// animation / wow.js
// =====================
$(function () {
  new WOW().init();
});

// スクロールしていくとコンテンツがフェードインするアニメーション
// ====================================================
$(function () {
  // スクロールした時にプログラムが動く
  $(window).scroll(function () {
    // htmlにfadeinクラスが付与されたものに対して繰り返し処理を実行
    $('.fadein').each(function () {
      // fadeinクラスが付いた要素のtopからの高さを取得
      let elementTop = $(this).offset().top;
      // ブラウザのスクロール位置を取得
      let scroll = $(window).scrollTop();
      // windowの高さを取得
      let windowHeight = $(window).height();
      // もしwindow内に入って100pxスクロールされたら，
      // その要素にscrollinクラスを付与
      if (scroll > elementTop - windowHeight + 100) {
        $(this).addClass('scrollin');
      } else {
        $(this).removeClass('scrollin');
      }
    });
  });
});