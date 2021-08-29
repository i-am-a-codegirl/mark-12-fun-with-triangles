const baseSide = document.querySelector(".base");
const height  = document.querySelector(".height");
const areaButton = document.querySelector(".calculate-area");
const theOutput = document.querySelector(".the-output");


areaButton.addEventListener("click", calculateAreaOfTriangle);

function calculateAreaOfTriangle(){

const areaOfTriangle = 1/2*(Number(baseSide.value)*Number(height.value));

if(baseSide.value&&height.value){
theOutput.innerText = "Area of the triangle is  ✔️ :" + areaOfTriangle;

}
else{
    theOutput.innerText = "It is an error! 📣 seems like you have not entered both the fields.⬆️" + "\n" + "We promise you will get the area if you enter  both the fields 🤝"
}




}