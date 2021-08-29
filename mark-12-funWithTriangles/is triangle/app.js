const angleOne = document.querySelector(".angle1");
const angleTwo = document.querySelector(".angle2");
const angleThree = document.querySelector(".angle3");
const isTriangleBtn = document.querySelector(".checkTriangle");
const finalOutput = document.querySelector(".output");

isTriangleBtn.addEventListener("click", function isTriangle(){

    calculateSumOfAngles(Number(angleOne.value),Number(angleTwo.value),Number(angleThree.value));

});

function calculateSumOfAngles(_angleOne,_angleTwo,_angleThree){
const sumOfAngles = _angleOne + _angleTwo + _angleThree;
 
if(_angleOne&&_angleTwo&&_angleThree){
 checkTriangle(sumOfAngles);
}
else{
    finalOutput.innerText="Woops !seems like you have not entered all the angles!🙄"
}

}

function checkTriangle(_sumOfAngles){
 if(_sumOfAngles===180){
finalOutput.innerText = "Yes! the angles forms a triangle🔺";

 }
 else{
    finalOutput.innerText = "Oops! the angles entered does not forms a triangle⚠️";

 }

}