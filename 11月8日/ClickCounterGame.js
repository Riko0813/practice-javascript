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