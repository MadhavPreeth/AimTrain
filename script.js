const container = document.getElementById("main-container");
const topsec = document.getElementById("top-sec");
const bottomsec = document.getElementById("bottom-sec"); 
const title =document.getElementById("idtitle");
const gameui = document.getElementById("game-ui");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
const startbtn = document.getElementById("startbtn");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");

let repeat;
let timeLeft = 30;
let frscore = 0;
let isfirstplay = true;

startbtn.addEventListener("click", startoragain);

function startoragain()
{
   if(isfirstplay)
   {
    mainfn();
   }
   else
   {
    againfn();
   }



}

function mainfn()
{   isfirstplay = false;
    title.style.display = "none";
    startbtn.classList.add("hidden");
    startbtn.textContent ="Again?"
    container.style.width = "90%";
    topsec.style.height = "12%";
    bottomsec.style.height = "88%";
    gameui.classList.remove("hidden");
    bottomsec.classList.add("gameactive");
    repeat = setInterval(countdown,1000);
    spawnball();
}

function againfn()
{   startbtn.classList.add("hidden");
    timeLeft = 30;
    frscore = 0;
    timer.textContent = "30";
    score.textContent = "0";
    one.classList.add("hidden");
    two.classList.add("hidden");
    three.classList.add("hidden");
    gameui.classList.remove("hidden");
    bottomsec.classList.add("gameactive");
    repeat = setInterval(countdown,1000);
    spawnball();
}

function ballfn()
{
frscore = frscore + 1;
score.textContent = frscore;
spawnball();
}

function countdown()
{
    
    timeLeft  = timeLeft -1;
    timer.textContent = timeLeft;

    if(timeLeft==0)
    {
    const finalscore = parseInt(score.textContent);
    gameui.classList.add("hidden");
    bottomsec.classList.remove("gameactive");
    const oldball = document.getElementById('ball');
    if(oldball)
    {
   oldball.remove();
    }

    if(finalscore <20)
        {
            score1.textContent = finalscore;
            one.classList.remove("hidden");
            clearInterval(repeat);
            startbtn.classList.remove("hidden");
        }
    else if(finalscore >= 20 && finalscore <= 50)
        {   
            score2.textContent = finalscore;
            two.classList.remove("hidden");
            clearInterval(repeat);
            startbtn.classList.remove("hidden");

        }
    else if(finalscore > 50)
        {   
            score3.textContent = finalscore;
            three.classList.remove("hidden");
            clearInterval(repeat);
            startbtn.classList.remove("hidden");
        }
    }
}

function spawnball()
{
 const oldball = document.getElementById('ball');
 if(oldball)
 {
   oldball.remove();
 }

 const ball = document.createElement('img');
 ball.src = 'ball.png';
 ball.id = 'ball';
 ball.classList.add('ball')

 const maxX = bottomsec.clientWidth -100;
 const maxY = bottomsec.clientHeight -100;
 const randX = Math.random() * maxX; 
 const randY = Math.random() * maxY;

 ball.style.position = 'absolute';
 ball.style.left = randX + 'px';
 ball.style.top = randY + 'px';

 ball.addEventListener('click', ballfn);

 bottomsec.appendChild(ball);
}


