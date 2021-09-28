const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('#calculate-hypotenuse-btn');
const outputhypotenuse=document.querySelector('#output');

function calculateSumOfSquares(a,b){
    const sumofsquare= a*a + b*b;
    return sumofsquare;
}

function calculateHypotenuse(){
 const sumofsquare= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
 const lengthOfHypotenuse=Math.sqrt(sumofsquare);
 //console.log(lengthOfHypotenuse);
 outputhypotenuse.innerText="The length of Hypotenuse is "+lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse)