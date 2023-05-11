export function getMovers(number, rownum) {
    let numbers = new Array(8);
    if(number%15 == 1){
        numbers[0] = null;
        numbers[1] = number - rownum;
        numbers[2] = number - rownum + 1;
        numbers[3] = null;
        numbers[4] = number + 1;
        numbers[5] = null;
        numbers[6] = number + rownum;
        numbers[7] = number + rownum + 1;
    }
    else if(number%15 == 0){
        numbers[0] = number - rownum - 1;
        numbers[1] = number - rownum;
        numbers[2] = null;
        numbers[3] = number - 1;
        numbers[4] = null;
        numbers[5] = number + rownum - 1;
        numbers[6] = number + rownum;
        numbers[7] = null;
    }
    else{
        numbers[0] = number - rownum - 1;
        numbers[1] = number - rownum;
        numbers[2] = number - rownum + 1;
        numbers[3] = number - 1;
        numbers[4] = number + 1;
        numbers[5] = number + rownum - 1;
        numbers[6] = number + rownum;
        numbers[7] = number + rownum + 1;
    }

    for (let i = 0; i < 8; i++) {
        if (numbers[i] <= 0) {
            numbers[i] = null;
        }
        else if (numbers[i] >= 226) {
            numbers[i] = null;
        }
    }
    return numbers;
  }