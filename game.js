"use strict";

const board = document.querySelector("#board");
const scoreNode = document.querySelector("#score");

let score = 0;

function updateScore(deltaOfPoints) {
  score += deltaOfPoints;
  scoreNode.textContent = score;
}

updateScore(0);

makeBoard(board, 10);

const basketNode = document.querySelector(".row:last-child .cell");
basketNode.classList.add("basket");

window.addEventListener("keyup", function(event) {
  const basketNode = document.querySelector(".basket");

  if (event.code === "ArrowRight") {
    const targetNode = basketNode.nextElementSibling;
    if (targetNode === null) {
      return;
    }
    basketNode.classList.remove("basket");
    targetNode.classList.add("basket");
  }
  if (event.code === "ArrowLeft") {
    const targetNode = basketNode.previousElementSibling;
    if (targetNode === null) {
      return;
    }
    basketNode.classList.remove("basket");
    targetNode.classList.add("basket");
  }
  const potentiallyRemovableFruit = document.querySelector(".fruit.basket");

  if (potentiallyRemovableFruit !== null) {
    potentiallyRemovableFruit.classList.remove("fruit");
    updateScore(1)
  }
});

setInterval(function() {
  const allFruitNodes = document.querySelectorAll(".fruit");

  allFruitNodes.forEach(function(element, index) {
    element.classList.remove("fruit");

    const columnIndex = getIndexWithinParent(element);
    const nextRow = getNextRow(element);
    if (nextRow === null) {
      console.log("game over");
      return;
    }
    const targetNode = nextRow.querySelector(
      `.cell:nth-child(${columnIndex + 1})`
    );
    targetNode.classList.add("fruit");

    const potentiallyRemovableFruit = document.querySelector(".fruit.basket");

    if (potentiallyRemovableFruit !== null) {
      potentiallyRemovableFruit.classList.remove("fruit");
      updateScore(1);
    }
  });
}, 500);

setInterval(spawnFruit, 3000);

function spawnFruit() {
  const allFreeCellsInFirstRow = document.querySelectorAll(
    ".row:nth-child(1) .cell:not(.friut)"
  );
  const howManyFreeCells = allFreeCellsInFirstRow.length;
  const randomIndex = Math.floor(Math.random() * howManyFreeCells);
  allFreeCellsInFirstRow[randomIndex].classList.add("fruit");
}
