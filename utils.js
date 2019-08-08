function makeBoard(target, size) {
  for (let y = 0; y < size; y += 1) {
    let rowNode = createNode('row');

    for (let x = 0; x < size; x += 1) {
      let cellNode = createNode('cell');

      rowNode.appendChild(cellNode);
    }
    target.appendChild(rowNode);
  }
}

function createNode(className) {
  const node = document.createElement('div');
  node.classList.add(className);

  return node;
}