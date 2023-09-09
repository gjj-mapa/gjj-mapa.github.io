export function getRangeOne(number, rownum) {
  let numbers = new Array(9);
  numbers[0] = number - rownum - 1;
  numbers[1] = number - rownum;
  numbers[2] = number - rownum + 1;
  numbers[3] = number - 1;
  numbers[4] = null;
  numbers[5] = number + 1;
  numbers[6] = number + rownum - 1;
  numbers[7] = number + rownum;
  numbers[8] = number + rownum + 1;
  if (number % rownum == 1) {
    numbers[0] = null;
    numbers[3] = null;
    numbers[6] = null;
  }
  if (number % rownum == 0) {
    numbers[2] = null;
    numbers[5] = null;
    numbers[8] = null;
  }

  for (let i = 0; i < 8; i++) {
    if (numbers[i] <= 0) {
      numbers[i] = null;
    } else if (numbers[i] > rownum * rownum) {
      numbers[i] = null;
    }
  }
  return numbers;
}
export function getRangers(center, rownum, range = 0) {
  const gridSize = rownum * rownum;
  const result = new Array(gridSize).fill(null);

  const centerRow = Math.floor(center / rownum);
  const centerCol = center % rownum;

  for (let i = 0; i < gridSize; i++) {
    const row = Math.floor(i / rownum);
    const col = i % rownum;

    if (
      Math.abs(row - centerRow) <= range &&
      Math.abs(col - centerCol) <= range
    ) {
      result[i] = i + 1;
    }
  }

  // Remove edges
  for (let i = 0; i < gridSize; i++) {
    const row = Math.floor(i / rownum);
    const col = i % rownum;

    if (row === 0 || row === rownum - 1 || col === 0 || col === rownum - 1) {
      result[i] = null;
    }
  }

  return result;
}
