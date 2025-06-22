const css = document.querySelector("h3") as HTMLElement | null;
const color1 = document.querySelector(".color1") as HTMLInputElement | null; //using the period in the query selector results in using a class. Note "color1" vs ".color1"
const color2 = document.querySelector(".color2") as HTMLInputElement | null;
const body = document.getElementById("gradient") as HTMLElement | null;

function setgradient() {
    if (color1 && color2 && body && css) {
        console.log(color1.value);
        body.style.background =
            'linear-gradient(to right,'
            + color1.value
            + ", "
            + color2.value
            + ")";

        css.textContent = body.style.background + ";";
    }
}

//Notice how below we do not call the function, this is because the event listener runs the function automatically. 
if (color1) {
    color1.addEventListener("input", setgradient);
}

if (color2) {
    color2.addEventListener("input", setgradient);
}
