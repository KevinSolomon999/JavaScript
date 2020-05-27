//High level definition of js
//It is an compiled ,lightweight,scripting language used to make html and css dynamic
//dynamic means the to render different values or update th epage based on user interaction
//JS uses JIT compiler which does compilation and execution during run time
//API IMPORTANT
//They are ready made programs that will help the developer to impliment programs
//An api we use all the time is DOM API
//it has methods like event listener, query selector
//Which are the functionalities given by the api
//They are divided into browser api and third party api
//Browser Security js doesnt allow script of one tab to interact with another tab
//3 types of ways js can be loaded into html
//different script loading methods
//async and differ
//opt foor differ




//Math is an api
//Math.random returns a number between 0 and 0.999











const colors = ["red","green", "blue"];
const button = document.getElementById('btn');
const color = document.body;
let hexColor = '#';

function getHexColor(){
    for (let i = 0;i<=6;i++)
    {
        hexColor += hex[Math.floor(Math.random()*6)];
    }
    return hexColor;
}


button.addEventListener("click",changeColor)


function changeColor(){
    const randNum = Math.floor(Math.random()*colors.length);
    console.log(randNum);
    color.style.backgroundColor = colors[randNum];
}