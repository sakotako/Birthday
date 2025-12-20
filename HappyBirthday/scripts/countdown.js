// 要素を取得
const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// 今年の値を取得
const currentYear = "2026";
// 誕生日00:00:00のDateオブジェクトを取得
const birthDayTime = new Date(`November 27 ${currentYear} 00:00:00`);

// 誕生日の値をDOMに追加
year.innerText = "11/26";


// カウントダウンの関数
function updateCountdown() {
  // 現在の時刻情報を取得する
  const currentTime = new Date();
  // 現在の時間と誕生日の時間の差を計算する（ミリ秒単位）
  const diff = birthDayTime - currentTime;

  // 現在から誕生日までの日数を計算
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  // 時間を計算
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  // 分を計算
  const m = Math.floor(diff / 1000 / 60) % 60;
  // 秒を計算
  const s = Math.floor(diff / 1000) % 60;

  // 取得した時間をDOMに追加
  days.innerText = d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = m < 10 ? '0' + m : m;
  seconds.innerText = s < 10 ? '0' + s : s;

  const balloons = document.getElementById("balloons");
  const signin = document.getElementById("signin");
  const audio = document.getElementById("audio_start");

  if(d==0 && h==0 && m==0 && s==5) {
    //audioを読み込み
    audio.load()
    // ３秒後audioを再生
    setTimeout(function()
      {play(audio)}, 0
    );

    function play(audio){
      audio.play();
    }
  }
  // 誕生日になった瞬間
  if(d==0 && h==0 && m==0 && s==0) {
    // カウントダウンストップ
    clearInterval(timeId);

    // ページ遷移
    // window.location.href = "signin.html";
    // 風船表示
    balloons.style.display = "block";
    signin.style.display = "block";
  }
}

// ページロード時に関数を実行
updateCountdown();
// 1秒ごとに関数を実行
let timeId = setInterval(updateCountdown, 1000);
