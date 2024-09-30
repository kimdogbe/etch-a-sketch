const container = document.querySelector(".container");
const body = document.querySelector("body");
let gridRows = [];

for (let i = 0; i < 16; i++){
  let row = [];
  let childRow = document.createElement("div");
  childRow.classList.add("childRow");

  for (let j = 0; j < 16; j++){
    let childDiv = document.createElement("div");
    childDiv.style.border = "1px solid black";
    childDiv.style.backgroundColor = "pink";
    childDiv.classList.add("gridDiv");

    childRow.appendChild(childDiv);
    row.push(childDiv);
  }
  
  container.appendChild(childRow);
  gridRows.push(row);
}

addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = 'red';
});

const settingsBtn = document.createElement("button");
settingsBtn.innerText = "Set grid size";
settingsBtn.classList.add("settingsBtn");
body.appendChild(settingsBtn);