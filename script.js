const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.setAttribute('class', 'column');
    for (let j = 0; j < gridSize; j++) {
      const rowDiv = document.createElement('div');
      rowDiv.setAttribute('class', 'row');
      rowDiv.addEventListener('mouseover', () => {
        rowDiv.style['background-color'] = 'black'
      });
      columnDiv.appendChild(rowDiv);
    }
    container.appendChild(columnDiv);
  }
}

createGrid(16);

const button = document.createElement('button');
button.textContent = 'Set Grid Size';
document.body.insertBefore(button, container);

button.addEventListener('click', () => {
  let inputSize;
  outerLoop: while (true) {
    while (typeof inputSize !== 'number') {
      if (inputSize === undefined) {
        inputSize = prompt('Please enter desired number of cells per side (1-100):');
      }
      else if (inputSize === null) {
        break outerLoop;
      }
      else if (inputSize === '') {
        inputSize = prompt('Please enter a value (1-100):');
        continue;
      } else {
        inputSize = Number(inputSize);
      }
    }    

    if (isNaN(inputSize)) {
      inputSize = prompt('Please enter a number (1-100):');
      continue;
    } else if (!Number.isInteger(inputSize)) {
      inputSize = prompt('Please enter an integer (1-100):');
    } else if (inputSize < 1 || inputSize > 100) {
      inputSize = prompt('Please enter an integer from 1 to 100 only:');
    } else {
      deleteGrid();
      createGrid(inputSize);
      break;
    }
  }
});

function deleteGrid() {
  const columns = document.querySelectorAll('.column')
  while (container.hasChildNodes()) {
    columns.forEach((column) => {
      while (column.hasChildNodes()) {
        column.removeChild(column.childNodes[0]);
      }
    });    
    container.removeChild(container.childNodes[0]);
  }
}