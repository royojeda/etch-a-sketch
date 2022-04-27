const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

for (let i = 0; i < 16; i++) {
  const columnDiv = document.createElement('div');
  columnDiv.setAttribute('class', 'column');
  for (let j = 0; j < 16; j++) {
    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row');
    columnDiv.appendChild(rowDiv);
  }
  container.appendChild(columnDiv);
}

