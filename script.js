let pixelGrid = document.querySelector("#pixelGrid");


let gridSize = 100;
let everyPixel ;

let pixel;



let brush = "gold";

let redButton = document.querySelector("#red");
redButton.addEventListener('click', (e) => {
    brush = "red";
});

let blueButton = document.querySelector("#blue");
blueButton.addEventListener('click', (e) => {
    brush = "blue";
});

let greenButton = document.querySelector("#green");
greenButton.addEventListener('click', (e) => {
    brush = "green";
});

let yellowButton = document.querySelector("#yellow");
yellowButton.addEventListener('click', (e) => {
    brush = "yellow";
});

let goldButton = document.querySelector("#gold");
goldButton.addEventListener('click', (e) => {
    brush = "gold";
});

let whiteButton = document.querySelector("#white");
whiteButton.addEventListener('click', (e) => {
    brush = "white";
});



let redButtonCircle = document.querySelector("#redCircle");
redButtonCircle.addEventListener('click', (e) => {
    brush = "redCircle";
});

let blueButtonCircle = document.querySelector("#blueCircle");
blueButtonCircle.addEventListener('click', (e) => {
    brush = "blueCircle";
});

let greenButtonCircle = document.querySelector("#greenCircle");
greenButtonCircle.addEventListener('click', (e) => {
    brush = "greenCircle";
});

let yellowButtonCircle = document.querySelector("#yellowCircle");
yellowButtonCircle.addEventListener('click', (e) => {
    brush = "yellowCircle";
});

let goldButtonCircle = document.querySelector("#goldCircle");
goldButtonCircle.addEventListener('click', (e) => {
    brush = "goldCircle";
});

let whiteButtonCircle = document.querySelector("#whiteCircle");
whiteButtonCircle.addEventListener('click', (e) => {
    brush = "whiteCircle";
});


createGrid(gridSize);

let clearButton = document.querySelector("#clear");

clearButton.addEventListener('click', (e) => {
    everyPixel.forEach((pixel) => {
        pixel.classList.remove(brush, "red", "blue", "green", "yellow", "gold", "white", 
        "redCircle", "blueCircle", "greenCircle", "yellowCircle", "goldCircle", "whiteCircle",);
    });
});













let newGridSize = document.querySelector("#size");

newGridSize.addEventListener("click", (e) => {
    
    gridSize = prompt("How many pixels would you like your portrait to be? Please select from 10 to 200.")
    if (gridSize > 200){
        gridSize=200;
    }
    else if (gridSize < 10){
        gridSize=10;
    }
    everyPixel.forEach((pixel) => {
        pixel.classList.remove(brush, "red", "blue", "green", "yellow", "gold", "white", 
        "redCircle", "blueCircle", "greenCircle", "yellowCircle", "goldCircle", "whiteCircle",);
    });
    createGrid(gridSize)
});



function createGrid(gridSize) {
    pixelGrid.style.gridTemplateColumns =  `repeat(${gridSize}, 1fr)`;
    pixelGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement("div");
        div.classList.add("pixel");
        pixelGrid.appendChild(div);
    }
    everyPixel = document.querySelectorAll(".pixel");
    everyPixel.forEach((pixel) => {
        pixel.addEventListener("mousedown", (e) => {
            pixel.classList.add(brush);
        });
    });

    
}