let res = document.getElementById("res");
let isX = false;
var gameZone = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function change(index) {
  if (index == "00" && gameZone[0][0] == 0) {
    gameZone[0][0] = isX ? 1 : 2;
    isX = !isX;
  }
  if (index == "01" && gameZone[0][1] == 0) {
    gameZone[0][1] = isX ? 1 : 2;
    isX = !isX;
  }
  if (index == "02" && gameZone[0][2] == 0) {
    gameZone[0][2] = isX ? 1 : 2;
    isX = !isX;
  }
  if (index == "10" && gameZone[1][0] == 0) {
    gameZone[1][0] = isX ? 1 : 2;
    isX = !isX;
  }
  if (index == "11" && gameZone[1][1] == 0) {
    gameZone[1][1] = isX ? 1 : 2;
    isX = !isX;
  }
  if (index == "12" && gameZone[1][2] == 0) {
    gameZone[1][2] = isX ? 1 : 2;
    isX = !isX;
  }
  if (index == "20" && gameZone[2][0] == 0) {
    gameZone[2][0] = isX ? 1 : 2;
    isX = !isX;
  }
  if (index == "21" && gameZone[2][1] == 0) {
    gameZone[2][1] = isX ? 1 : 2;
    isX = !isX;
  }
  if (index == "22" && gameZone[2][2] == 0) {
    gameZone[2][2] = isX ? 1 : 2;
    isX = !isX;
  }
  show();
}

function show() {
  res.innerHTML = "";
  for (let i = 0; i < gameZone.length; i++) {
    res.innerHTML += "<br/>";
    for (let j = 0; j < gameZone[i].length; j++) {
      res.innerHTML += `<button id="${`${i}${j}`}" onclick="change(${`${i}${j}`})">${gameZone[i][j]}</button> `;
    }
  }
}
