const sides=document.querySelectorAll('.side-input');
const outputArea=document.querySelector('#output');
const calculateAreaOfTriangleBtn=document.querySelector('#area-of-triangle-btn');

function sideProduct(a,b){
const product= a*b;
return product;
}

function areaOfTriangle(){
  
    const product=sideProduct(Number(sides[0].value),Number(sides[1].value));
    const Area=1/2*product;
    outputArea.innerText="The area of Triangle is "+Area;
    

}

calculateAreaOfTriangleBtn.addEventListener("click",areaOfTriangle);