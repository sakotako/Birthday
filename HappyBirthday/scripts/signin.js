console.clear();
document.addEventListener("DOMContentLoaded", function() {
    let d = document;
    let passwordElement = d.getElementById('password');

    passwordElement.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          signin();
        }
    });
    document.getElementById('signinButton').addEventListener('click', function() {
        signin();
    });

    // document.getElementById('showPassword').addEventListener('change', function() {
    //     if (this.checked) {
    //         passwordElement.type = 'text';
    //     } else {
    //         passwordElement.type = 'password';
    //     }
    // });

    function signin() {
        let passwordInput = passwordElement.value;
        const audio = document.getElementById('audio_start');

        if (passwordInput === "") {
            // モザイクをスライドアップ
            $("#signin_container").slideUp(2000);
            // スクロール制御OFF
            document.removeEventListener('touchmove', noscroll);
            document.removeEventListener('wheel', noscroll);
            //audioを読み込み
            audio.load()
            // 0秒後audioを再生
            setTimeout(function()
              {play(audio)}, 0
            );

          function play(audio){
            audio.play();
          }
        } else {
            alert('間違ってますけど？？？！！！！');
        }
    }
});
