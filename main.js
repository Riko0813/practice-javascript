function ClickCounterGame(){
    let count = 0;
    //countという変数を準備して、0を代入する


    const gameContainer = document.getElementById("game-container");

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    button1.textContent = "+1ボタン";
    button2.textContent = "+10ボタン";
    button3.textContent = "リセットボタン";
    let counter = document.createElement("p");
    //ボタンタグを作成する　<buttton>ボタン</button>を作り、変数に代入　１
    counter.textContent =  count;

    button1.addEventListener("click",function(){//クリックというイベントを読み取る　２
        count++;
        counter.textContent = count; //処理を記述する
       
    })
    button2.addEventListener("click",function(){
        count = count + 10;
        counter.textContent = count;
    })

    counter.addEventListener("click",function(){
        count = 0;
        counter.textContent = count;
    })c

    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);//ボタンを表示する　4
    gameContainer.appendChild(button3);
    gameContainer.appendChild(counter);
}
 
ClickCounterGame();

