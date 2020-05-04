// getElementById and declaring variables

var answerOneEl = document.getElementById("answerOne");
var answerTwoEl = document.getElementById("answerTwo");
var answerThreeEl = document.getElementById("answerThree");
var answerFourEl = document.getElementById("answerFour");
var massageDiv  = document.getElementById('massage');
var timer = document.getElementById("time")
var startBtn = document.getElementById('start-button')
var questionEl =   document.getElementById('question');
var scoreList = [];
var score = 0;
var secondLeft = 60;
var i = 0;
var correctSound = new Audio ("asset/correct.mp3");
var incorrectSound = new Audio ("asset/incorrect.wav");



// setting timer

function setTime(){
   var timerInterval = setInterval(() => {
        secondLeft --;
        document.getElementById("time").innerHTML  = "timer: " + secondLeft;   
        if(secondLeft === 0){
            clearInterval(timerInterval)
            alert("out of time")
            questionEnder();
        }else if(i === questions.length){
                clearInterval(timerInterval);
            
            }
    }, 1000);
    return(score);
  
}
  function questionEnder(){
      var scoreTag = document.createElement("h1");
      var inputTag = document.createElement("input");
      var submitButton = document.createElement("button");
      score += secondLeft*.1;
      score = score.toFixed(2);

     questionEl.textContent = "well done!";
     answerOneEl.remove()
     answerTwoEl.remove()
     answerThreeEl.remove()
     answerFourEl.remove()
     
     document.body.children[1].appendChild(scoreTag);
     document.getElementsByTagName("h1")[1].setAttribute("id","score");
     document.getElementById("score").textContent = "your score: "+ score;
     

     document.body.children[1].appendChild(inputTag);
     submitButton.textContent = "submit";
     document.body.children[1].appendChild(submitButton);

     submitButton.addEventListener("click",function(event){
         event.preventDefault();
      var highScoreText = new Object();
      highScoreText.name = inputTag.value.trim();
      highScoreText.newScore  = score;
      storeScores(highScoreText);
      window.location.href = "highScores.html"
     })
  }



function questionSetter(){
    answerOneEl.hidden = false;
    answerTwoEl.hidden = false;
    answerThreeEl.hidden = false;
    answerFourEl.hidden = false;
    startBtn.hidden = true;
    if(i == questions.length){
        questionEnder();
    }else{
        document.getElementById("question").textContent = questions[i]['title']
        answerOneEl.textContent = questions[i]['choices'][0]
        answerTwoEl.textContent = questions[i]['choices'][1]
        answerThreeEl.textContent = questions[i]['choices'][2]
        answerFourEl.textContent = questions[i]['choices'][3]

    }
}  


function storeScores(highScoreText){
var temArray = [];

 temArray = JSON.parse(localStorage.getItem("scores"))
if(temArray === null ){
    scoreList.push(highScoreText);
    localStorage.setItem('scores',JSON.stringify(scoreList))
}else{
   temArray.push(highScoreText);
    localStorage.setItem('scores',JSON.stringify(temArray));
}
}

startBtn.addEventListener("click",questionSetter);
startBtn.addEventListener("click",setTime);
startBtn.addEventListener("click",function(){
    massageDiv.textContent = "";
});

answerOneEl.hidden = true;
answerTwoEl.hidden = true;
answerThreeEl.hidden = true;
answerFourEl.hidden = true;

answerOneEl.addEventListener("click",function(){
    if(questions[i]["choices"][0] === questions[i]["answer"]){
        massageDiv.textContent = "correct!";
        score++;
       correctSound.play();

    }else{
         secondLeft -= 10;
         massageDiv.textContent = "wrong!"
       incorrectSound.play();
    }
    i++
    questionSetter();
})

answerTwoEl.addEventListener("click",function(){
    if(questions[i]["choices"][1] === questions[i]["answer"]){
        massageDiv.textContent = "correct!";
        score++;
        correctSound.play();
    }else{
         secondLeft -= 10;
         massageDiv.textContent = "wrong!"
         incorrectSound.play();
    }
    i++
    questionSetter();
})

answerThreeEl.addEventListener("click",function(){
    if(questions[i]["choices"][2] === questions[i]["answer"]){
        massageDiv.textContent = "correct!";
        score++;
        correctSound.play();
    }else{
         secondLeft -= 10;
         massageDiv.textContent = "wrong!"
         incorrectSound.play();
    }
    i++
    questionSetter();
})
answerFourEl.addEventListener("click",function(){
    if(questions[i]["choices"][3] === questions[i]["answer"]){
        massageDiv.textContent = "correct!";
        score++;
        correctSound.play();
    }else{
         secondLeft -= 10;
         massageDiv.textContent = "wrong!"
        incorrectSound.play();
    }
    i++
    questionSetter();
})