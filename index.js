const arr = ["Rock","Paper","Scissor"];
const btn1 = document.getElementById("first");
btn1.addEventListener('click',()=>{
    const Player_choice = Math.floor(Math.random()*arr.length);
    const player = document.getElementById("player-choice");
    player.innerHTML="Player : "+arr[Player_choice];

    const comp_choice = document.getElementById("computer-choice");
    const computer = Math.floor(Math.random()*arr.length);
    comp_choice.innerHTML = "Computer : " + arr[computer];

    const result = document.getElementById("game-result");

    if (arr[Player_choice] === arr[computer]) {
        result.innerHTML = "Result : "+"Draw";
    }
    else if(arr[Player_choice]=="Paper" && arr[computer]=="Rock" || 
        arr[Player_choice]=="Rock" && arr[computer] =="Scissor" ||
        arr[Player_choice]=="Scissor" && arr[computer] =="Paper")
        {
        result.innerHTML = "Result : " + "Player Wins";
    }
    else{
        result.innerHTML = "Result : " + "Computer Wins";
    }
});
const btn2 = document.getElementById("sec");
btn2.addEventListener('click',()=>{
    location.reload();
})
