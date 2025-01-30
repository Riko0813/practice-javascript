//function ClickCounterGame(){
//     let count = 0;
//     //countという変数を準備して、0を代入する


//     const gameContainer = document.getElementById("game-container");

//     let button1 = document.createElement("button");
//     let button2 = document.createElement("button");
//     let button3 = document.createElement("button");
//     button1.textContent = "+1ボタン";
//     button2.textContent = "+10ボタン";
//     button3.textContent = "リセットボタン";
//     let counter = document.createElement("p");
//     //ボタンタグを作成する　<buttton>ボタン</button>を作り、変数に代入　１
//     counter.textContent =  count;
    
//     button1.addEventListener("click",function(){//クリックというイベントを読み取る　２
//         if (100
//             >count){
//         count++;
//         }
//         counter.textContent = count; //処理を記述する
       
//     })
//     button2.addEventListener("click",function(){
//         if (100>count){
//         count = count + 10;
//         }
//         counter.textContent = count;
//     })

//     button3.addEventListener("click",function(){
//         count = 0;
//         counter.textContent = count;
    
//     })
    
//     gameContainer.appendChild(button1);
//     gameContainer.appendChild(button2);//ボタンを表示する　4
//     gameContainer.appendChild(button3);
//     gameContainer.appendChild(counter);
// }
 
// ClickCounterGame();




function stertNumberGuessGame(){
    const gameContainer = document.getElementById("game-container");
    const randomNumber = Math.floor(Math.random()*100) + 1;
    let message = document.createElement("p");
  
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "好きな数字を入力してください (1~100)"
    gameContainer.appendChild(message);
    gameContainer.appendChild(input)

    let button = document.createElement("button");
    button.textContent = "確認"

    button.addEventListener("click",function(){
        const val = parseInt(input.value);
        if (randomNumber == val){
            message.textContent = "正解"
        }else if(randomNumber < val){
            message.textContent = "大きい"
        }else{
            message.textContent = "小さい"
        }
        count++;
        countDisplay.textContent = `試行錯誤: ${count}`;

    })

    gameContainer.appendChild(button);

    let count = 0;
    const countDisplay = document.createElement("p");
    countDisplay.textContent = `試行錯誤 :  ${count}`;
    gameContainer.appendChild(countDisplay);

}
stertNumberGuessGame();