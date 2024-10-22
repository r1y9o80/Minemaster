const s = document.getElementById("s");
const f = document.getElementById("f");
const check_p = document.getElementById("check_p");


//リストを混ぜる関数
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替える
    }
    return array;
};


//setからkuizuへ移動
const to_kuizu = (url) => {
    const s_v = parseInt(s.value);
    const f_v = parseInt(f.value);
    if (!isNaN(s_v) && !isNaN(f_v)) {
        if (s_v <= f_v) {
            check_p.textContent = "";  // エラーメッセージをクリア
            window.location.href = url;  // ページ遷移
            nums = []; // numsをリセット
            for (let i = s_v; i < f_v+1; i++) { // s_vからf_vの範囲を使う
                nums.push(i);
            }
            nums = shuffleArray(nums)
            localStorage.setItem('save_nums', JSON.stringify(nums)); // 配列を保存
        } else {
            check_p.textContent = "＊スタート番号は最終番号より小さくなければなりません";
        }
    } else {
        check_p.textContent = "＊数字を入力してください(スタート < 最終)";
    }
};
