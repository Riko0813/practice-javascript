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
         case "RPS":
                RPS();
                break;   
    }
})








