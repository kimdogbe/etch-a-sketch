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
      childDiv.style.backgroundColor = "pink";
      childDiv.style.opacity = 1;
      childDiv.classList.add("gridDiv");
  
      childRow.appendChild(childDiv);
      row.push(childDiv);
    }
    
    container.appendChild(childRow);
    gridRows.push(row);
  }
}

addEventListener("mouseover", (event) => {
  if (event.target.className == 'gridDiv'){
    let currentOpacity = Number(event.target.style.opacity)
    event.target.style.backgroundColor = colorRandomizer3000();
    event.target.style.opacity = "" + currentOpacity - 0.1;

  }
});

function colorRandomizer3000() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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