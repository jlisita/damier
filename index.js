const containerDiv = document.querySelector(".container");


let rowSize = 8;

let row = [];

rowElement = document.createElement("div");


rowElement.className = "row";
containerDiv.appendChild(rowElement);

for(let i = 0; i < rowSize; i++)
{
    let squareEl = document.createElement("div");
    console.log(squareEl.className);
    squareEl.classList.add("square");
    rowElement.appendChild(squareEl);
    row.push(squareEl);
}

