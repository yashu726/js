const btn = document.querySelector(".btn");
const colorText = document.querySelector("#color-text");

const hexaCode = [0,1,2,3,4,5,6,"A","B","C","D","E","F"];


function getRandomNumber(){
    return Math.floor(Math.random() * hexaCode.length)
}

btn.addEventListener("click", () =>{
    let hexaColor = '#';

    for(let i = 0; i<6; i++)
    {
        hexaColor +=  hexaCode[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexaColor;
    colorText.textContent = hexaColor;
})