const inputs=document.querySelectorAll('.angle-input');
const isTriangleButton=document.querySelector('#is-triangle-btn');
const outputEl=document.querySelector('#output');



function calculateSumOfAngle(angle1,angle2,angle3){
    const sumOfAngle=angle1+angle2+angle3;
   
   return sumOfAngle;
}

function isTringle(){
    const sumOfAngle=calculateSumOfAngle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if (sumOfAngle===180){
       outputEl.innerText="Yay Angles form a Triangle"
    }
    else{
        outputEl.innerText="Oh Oh Angles does not form a Triangle"
    }
    }

isTriangleButton.addEventListener("click",isTringle)