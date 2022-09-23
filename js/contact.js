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