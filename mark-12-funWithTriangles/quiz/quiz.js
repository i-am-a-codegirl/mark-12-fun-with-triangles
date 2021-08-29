const quizForm = document.querySelector(".form");
const scoreButton = document.querySelector(".check-score");
const finalOutput = document.querySelector(".output");


const rightAnswers = ["90°", "right-angeled", "one right angle",
"12, 16, 20",
"Equilateral triangle"];



function calaculateScore(){
let score = 0;
let index = 0;

const usersAnswers = new FormData(quizForm);
for(let value of usersAnswers.values()){
if(value === rightAnswers[index]){
    score = score + 1;

}
index = index + 1;

}

if (score === 0){
    finalOutput.innerText = "Well, I understand it is tough to be good at triangles 😟" + "\n" + "You missed the correct answers this time..try again!!🤩"
}
else{
     finalOutput.innerText = "cool! 😎 seems like you are good at triangles.Your score is " + score;
}
}

scoreButton.addEventListener("click", calaculateScore);
