const containerDiv = document.querySelector(".container");

let nbrColumn = 8;
let nbrRow = 8;

let grid = [];
let row = [];

for(let j = 0; j < nbrRow; j++)
{
    rowElement = document.createElement("div");
    rowElement.className = "row";
    containerDiv.appendChild(rowElement);
    grid[j]= rowElement;

    for(let i = 0; i < nbrColumn; i++)
    {
        let squareEl = document.createElement("div");
        console.log(squareEl.className);
        squareEl.classList.add("square");
        rowElement.appendChild(squareEl);
        row.push(squareEl);
    }
}
