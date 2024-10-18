const gameSelector = document.getElementById('game-selector');
const gemeContainer = document.getElementById('game-container');

 gemeContainer.textContent="ゲームを選ぶとここに表示されます"

gameSelector.addEventListener("change",function(){
    gemeContainer.innerHTML = "";
    switch(gameSelector.value){
        case "none":
        gemeContainer.textContent="ゲームを選ぶとここに表示されます"
            break;
        case "click-counter":
            ClickCounterGame();
            break;
        case "number-guess":
            NumberGuessGeme();
            break;
    }
})

function NumberGuessGeme(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    //console.log(randomNumber);
    let massage = document.createElement("p");
    let input = document.createElement("input");
    input.typ = "number";
    input.max = 100;
    input.min = 1;
    input.placeholder = "好きな数字を入力してください (1-100)"
    let button = document.createElement("button");
    button.textContent = "予想"
    button.addEventListener("click",function(){
        const userGuess = parseInt(input.value);
        if(userGuess === randomNumber){
            massage.textContent = "正解！"
        }else if(userGuess > randomNumber){
            massage.textContent = "値が高いよ"
        }else{
            massage.textContent = "値が小さいよ！"
        }
    })
    
    gemeContainer.appendChild(input);
    gemeContainer.appendChild(button);
    gemeContainer.appendChild(massage);
}




function ClickCounterGame(){
    let count = 0;
   
    let button1 = document.createElement("button");
    button1.textContent ="+1ボタン";

    let button2 = document.createElement("button");
    button2.textContent ="+10ボタン";

    let button3 = document.createElement("button");
    button3.textContent ="+100ボタン";

    
    let counter = document.createElement("p");
    counter.textContent = count;
    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

    button2.addEventListener("click",function(){
        count=count+10;
        counter.textContent = count;
    })

    button3.addEventListener("click",function(){
        count=count+100;
        counter.textContent = count;
    })

    gemeContainer.appendChild(button1);
    gemeContainer.appendChild(button2);
    gemeContainer.appendChild(button3);
    gemeContainer.appendChild(counter);
}