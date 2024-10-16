// create 16x16 grid of square divs with javascript
// in container div

const container = document.querySelector(".container");
const containerHeight = container.offsetHeight - 4;
const containerWidth = container.offsetWidth - 4;


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

createSquareGrid(16, 16);
