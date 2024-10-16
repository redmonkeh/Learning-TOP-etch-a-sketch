// create 16x16 grid of square divs with javascript
// in container div

const container = document.querySelector(".container");
const containerHeight = container.offsetHeight - 4;
const containerWidth = container.offsetWidth - 4;
const startButton = document.querySelector("#start");


function createSquareGrid(row, col){
    let totalSquares = row * col;
    let squareHeight = containerHeight/row + "px";
    let squareWidth = containerWidth/col + "px";
    
    for(let i = 0; i < totalSquares; i++){
        const square = document.createElement("div");
        square.style.height = squareHeight;
        square.style.width = squareWidth;
        square.style.backgroundColor = "lightblue";
        square.addEventListener("mouseover", function () {
            changeSquareColor("pink", square);
        });
        //square.addEventListener("mouseout", function () {
        //    changeSquareColor("lightblue", square);
        //});
        square.addEventListener("mouseout", changeSquareColor("lightblue", square));
        container.appendChild(square);

    }
}

function changeSquareColor(color, square){
    square.style.backgroundColor = color;
}

function startDrawing(){
    startButton.addEventListener("click", function(){
        while(container.firstChild){
            container.firstChild.remove();
        }
        let col = prompt("How many square across?");
        while (col > 100 || col < 1){
            col = prompt("Please choose a number from 1 to 100.");
        }
        let row = prompt("How many squares high?");
        while (row > 100 || row < 1){
            row = prompt("Please choose a number from 1 to 100.");
        }
        createSquareGrid(row, col);
    });
}

startDrawing();
