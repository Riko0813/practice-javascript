function ClickCounterGame(){
    let count = 0;
    //countという変数を準備して、0を代入する


    const gameContainer = document.getElementById("game-container");

    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";

    let counter = document.createElement("p");
    //ボタンタグを作成する　<buttton>ボタン</button>を作り、変数に代入　１
    counter.textContent =  count;

    button1.addEventListener("click",function(){//クリックというイベントを読み取る　２
        count++;
        counter.textContent = count;
    })
    
    gameContainer.appendChild(button1);
    gameContainer.appendChild(counter);
}
 
ClickCounterGame();