const board = document.querySelector('#board');

makeBoard(board, 10);

document.querySelector('.cell').classList.add('fruit');


const fruitNode =document.querySelector('.fruit')

fruitNode.classList.remove("fruit")

const targetFruitNode = document.querySelector('.row:nth-child(2) .cell')

targetFruitNode.classList.add('fruit');
