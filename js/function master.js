export function getMovers(number, rownum) {
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
  const result = new Array(gridSize).fill('x');

  const centerRow = Math.floor(center / rownum);
  const centerCol = center % rownum;

  for (let i = -range; i <= range; i++) {
    for (let j = -range; j <= range; j++) {
      const row = centerRow + i;
      const col = centerCol + j;
      const index = row * rownum + col;

      if (
        row < 0 ||
        row >= rownum ||
        col < 0 ||
        col >= rownum ||
        index === center
      ) {
        continue; // Skip out-of-bounds and center
      }

      result[index] = 'o';
    }
  }

  // Remove edges
  for (let i = 0; i < gridSize; i++) {
    const row = Math.floor(i / rownum);
    const col = i % rownum;

    if (row === 0 || row === rownum - 1 || col === 0 || col === rownum - 1) {
      result[i] = 'y';
    }
  }

  return result;
}
