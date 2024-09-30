const container = document.querySelector(".container");
let gridRows = [];

for (let i = 0; i < 16; i++){
  let row = [];
  let childRow = document.createElement("div");
  childRow.classList.add("childRow");

  for (let j = 0; j < 16; j++){
    let childDiv = document.createElement("div");
    childDiv.style.border = "2px solid black";
    childDiv.style.backgroundColor = "pink";
    childDiv.classList.add("gridDiv");
    childDiv.textContent = `${i} x ${j}`;

    childRow.appendChild(childDiv);
    row.push(childDiv);
  }
  
  container.appendChild(childRow);
  gridRows.push(row);
}