var css = document.querySelector("h3")
var color1 = document.querySelector(".color1") //using the period in the query selector results in using a class. Note "color1" vs ".color1"
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")

function setgradient() {
    console.log(color1.value)
    body.style.background = 
    'linear-gradient(to right,' 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";"
}

//Notice how below we do not call the function, this is because the event listener runs the function automatically. 
color1.addEventListener("input", setgradient)

color2.addEventListener("input", setgradient)
