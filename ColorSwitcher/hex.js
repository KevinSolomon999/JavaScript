
const button = document.getElementById('btn');
const color = document.body;
const hexDisplay = document.querySelector('.color');


function changeColor(){
    let hex = '123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0;i<=5;i++)
         {
            hexColor += hex[Math.floor(Math.random()*15)];
            
        }
        console.log(hexColor);
    
    color.style.backgroundColor = hexColor;
    hexDisplay.textContent = hexColor;

}

button.addEventListener("click",changeColor)
