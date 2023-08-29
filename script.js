// modell
const answers = {
    "positiveAnswer": [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    " Most likely",
    " Outlook good",
    "Yes",
    "Signs point to yes"
],
    "neutralAnswer": [
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
],
    "negativeAnswer": [
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
] 
};
let fortune = 8;

// view
updateView();
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <h1>Magic 8-Ball</h1>
    <div id="blackBall">
    <div class="changingContent" id="content" onclick="getFortune()">${fortune}</div>
    </div>
    <button onclick="restart()">Restart</button>
    `;
}

// controller

function getFortune(){
    document.getElementById("content").classList.remove("changingContent");
    document.getElementById("content").classList.add("answer");
    let fortuneType;
    let randomIndex = Math.floor(Math.random()*3);

    if (randomIndex ==0){
        fortuneType = "positiveAnswer";
        document.getElementById("content").style.background = "green";
    } else if (randomIndex == 1){
        fortuneType = "neutralAnswer";
        document.getElementById("content").style.background = "yellow";
    } else if (randomIndex == 2){
        fortuneType = "negativeAnswer";
        document.getElementById("content").style.background = "red";
    }

    fortune = answers[fortuneType][Math.floor(Math.random()* answers[fortuneType].length)]
    document.getElementById("content").innerHTML = fortune;
    updateView;
}

function restart(){
    fortune = 8;
    updateView();
}