/* slick.js
========================= */
$(function () {
  $('#mas-slick').slick({
    arrows: true,           // 矢印は表示
    dots: true,             // ドット表示
    appendDots: $('.master-dots'), // ドットナビゲーションの生成位置を変更
    speed: 500,             // フェードアニメーションの速度 
    slidesToShow: 1,        // 表示するスライドの枚数 
    centerMode: true,       // 前後のスライドを部分的に表示 
    variableWidth: false,   // 一定幅以上で前後のスライドを表示するスライダー
    slidesToScroll: 1,      // 一度にスクロールするスライドの数 
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

/* header > nav: ハンバーガーメニュー
================================== */
$(function () {
  $('#nav-btn').on('click', function () {
    console.log("loaded");
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});

/* FAQ: アコーディオン
===================== */
$(function () {
  $('.js-accordion').on('click', function () {
    $(this).next().slideToggle();
  })
});

/* animated.css & WOW.js Animation 
=================================== */
$(function () {
  new WOW().init();
});

/* スクロールしていくとコンテンツがフェードインするアニメーション
======================================================= */
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
      /* もしwindow内に入って100pxスクロールされたら，
         その要素にscrollinクラスを付与 */
      if (scroll > elementTop - windowHeight + 100) {
        $(this).addClass('scrollin');
      } else {
        $(this).removeClass('scrollin');
      }
    });
  });
});

/* waypoint.js & CSS: fadeInRight Animation 
============================================ */

let screen_width = window.innerWidth;
console.log(screen_width);

function screenWidth() {
  let per_num = 0;
  if (screen_width <= 768) {
    per_num = "90%";
  } else {
    per_num = "50%";
  }
  return per_num;
}
const percent_num = screenWidth();

// box部分が.waypoint()を呼び出す要素
$(".animated").waypoint({
  handler(direction) {
    // 要素が画面中央に来るとここが実行される
    let activePoint = $(this.element);
    if (direction === "down") {
      /* -----------------
        下方向のスクロール
        イベント発生元の要素にfadeInUpクラスを付けることで
        アニメーションを開始
        this.elementはanimatedクラスを持つ要素のうち、画面中央に来た要素 
      ----------------------- */
      activePoint.addClass("fadeInRight").removeClass("fadeOut");
      console.log("fadeInRight->fadeOut");
      /* -------------------
      既存のwaypointを削除
      waypointを削除することでこれ以降handlerが呼ばれなくなる
      ここでは最初の1回だけhandlerが実行されればよいので、this.destroy()でwaypointを削除
      this.destroy(); 
      ----------------------- */
    } else if (direction === "up") {
      activePoint.addClass("fadeOut").removeClass("fadeInRight")
      console.log("fadeOut->fadeInRight");
    }
  },
  /* -------------------------------
  画面の一番下に来たらhandlerを実行
  要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
  0%なら画面の一番上、50% なら画面の中央，100%なら画面の一番下に来たときに呼び出される 
  ---------------------------------- */
  offset: percent_num,
});


/* スムーズスクロールでページ内リンク
================================ */

// フッターで隠れないように高さ位置調整の値
let corr_num = 170;

$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function () {
    console.log("Smooth Scrolling");
    // スクロールの速度 (ミリ秒)
    let speed = 500;
    // アンカーの値取得
    let href = $(this).attr("href");
    // 移動先を取得
    let target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    let position = target.offset().top - corr_num;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

/* ページ間スムーススクロール 
========================== */
$(function () {
  let url = jQuery(location).attr('href');
  if (url.indexOf("?id=") == -1) {
    // スムーズスクロール以外の処理（必要なら）
  } else {
    // スムーズスクロールの処理
    var url_sp = url.split("?id=");
    var hash = '#' + url_sp[url_sp.length - 1];
    var tgt = $(hash);
    var pos = tgt.offset().top - corr_num;
    $("html, body").animate({ scrollTop: pos }, 400, "swing");
  }
});

/*「その他」をチェックするとテキスト欄が有効化 
======================================= */
function connecttext(textid, ischecked) {
  if (ischecked == true) {
    // チェックが入ったら有効化
    document.getElementById(textid).disabled = false;
    console.log("checked");
  } else {
    // チェックが入っていなかったら無効化
    document.getElementById(textid).disabled = true;
    console.log("removed");
  }
}

/* Windowサイズによって「下/右」を切替 
================================== */
const resize = () => {

  let timeoutID = 0;
  let delay = 500;
  let span1 = document.getElementById("span1");

  window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('resize', function () {
      console.log("Width:" + window.innerWidth);
      console.log("Height:" + window.innerHeight);
    });
  });

  window.addEventListener("resize", () => {
    clearTimeout(timeoutID);
    let win_size = window.innerWidth;
    timeoutID = setTimeout(() => {
      // ここにリサイズした後に実行したい処理を記述
      if (win_size > 768) {
        span1.innerText = '右';
        console.log("右");
      } else {
        span1.innerText = "下";
        console.log("下");
      }
    }, delay);
  }, false);
};

resize();