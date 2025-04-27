let color = document.getElementById("color");
let button = document.getElementById("button");
let text = document.getElementById("text");
let span = document.querySelector(".span");
let newColor = color.value;
let currentColor = color.value;

color.addEventListener("input", (e)=>{
    newColor = e.target.value;
});

button.onclick = function(){

    if (currentColor !== newColor){
        span.style.display = "none"
        text.textContent = "You changed the color";
        text.style.color = newColor; 
        currentColor = newColor;

    }
    else{
        span.textContent = "Select a color to change the text";
        span.style.display = "block";

    }

   
}