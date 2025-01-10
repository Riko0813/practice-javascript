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