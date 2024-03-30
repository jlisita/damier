const containerDiv = document.querySelector(".container");

let nbrColumn = 8;
let nbrRow = 8;

let grid = [];

for(let i = 0; i < nbrRow; i++)
{
    let rowArray = [];
    grid.push(rowArray);
    rowElement = document.createElement("div");
    rowElement.className = "row";
    containerDiv.appendChild(rowElement);


    for(let j = 0; j < nbrColumn; j++)
    {
        let colors;
        if(i % 2 == 0)
        {
            colors = ["white","black"];
        }
        else
        {
            colors = ["black","white"];
            
        }
        let color = colors[j % 2];
        let squareEl = createSquare(rowArray,color);
    }
}

function createSquare(row,color)
{
    let squareEl = document.createElement("div");
    squareEl.classList.add("square");
    squareEl.style.backgroundColor = color;
    rowElement.appendChild(squareEl);
    row.push(squareEl);

    return squareEl;
}
