const sideA = document.querySelector(".side-a");
const sideB = document.querySelector(".side-b");
const calculateHypotensuseBtn = document.querySelector(".calculate-hypotenuse");
const finalResult = document.querySelector(".result");


calculateHypotensuseBtn.addEventListener("click", calculateHypotenuse);


function calculateHypotenuse(){

const sumOfSquares = calculateSumOfSides(Number(sideA.value),Number(sideB.value));

const hypotenuse = Math.sqrt(sumOfSquares);

if(sideA.value&&sideB.value){
finalResult.innerText = "the length of hypotenuse is =" + hypotenuse + "" + "🤗";
}
else(
    finalResult.innerText = "Sorry, but you forgot to enter both the sides. Kindly enter both sides, that is, a🔺 and b🔺"
)

}

function calculateSumOfSides(a,b){

const sumOfSides = a*a + b*b;
return sumOfSides;

}