const container = document.querySelector(".container");
const body = document.querySelector("body");
let gridRows = [];

function resetCanvas(gridSize) {
  container.innerHTML = ""

  for (let i = 0; i < gridSize; i++){
    let row = [];
    let childRow = document.createElement("div");
    childRow.classList.add("childRow");
  
    for (let j = 0; j < gridSize; j++){
      let childDiv = document.createElement("div");
      // childDiv.style.border = "1px solid black";
      childDiv.style.backgroundColor = "pink";
      childDiv.classList.add("gridDiv");
  
      childRow.appendChild(childDiv);
      row.push(childDiv);
    }
    
    container.appendChild(childRow);
    gridRows.push(row);
  }
}

addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = 'red';
});

const settingsBtn = document.createElement("button");
settingsBtn.innerText = "Set grid size";
settingsBtn.classList.add("settingsBtn");
body.appendChild(settingsBtn);

settingsBtn.addEventListener("click", (event) => {
  let gridSize = Number(prompt("Select grid size (max = 100)", "64"));
  gridSize = gridSize > 100 ? 100 : gridSize;
  
  resetCanvas(gridSize);
});

resetCanvas(20);