"use strict";

const board = document.querySelector("#board");

makeBoard(board, 10);

setInterval(function() {
  const allFruitNodes = document.querySelectorAll(".fruit");
    allFruitNodes.forEach(function(element) {
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
  });
}, 1000);

setInterval(function(){
    const allFreeCellsInFirstRow = document.querySelectorAll(
        ".row:nth-child(1) .cell:not(.friut)"
    )
    const howManyFreeCells = allFreeCellsInFirstRow.length;
    const randomIndex = Math.floor(Math.random() * howManyFreeCells);
    allFreeCellsInFirstRow[randomIndex].classList.add('fruit');
    
}, 1000);
