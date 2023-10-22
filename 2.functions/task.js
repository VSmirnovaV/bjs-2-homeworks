function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum;
  let element;
  min = Math.min(...arr);
  max = Math.max(...arr);
  let sumElement = arr.reduce((sum, element) => sum + element, 0);
  let quantityElement = arr.length;
  avg = sumElement / quantityElement;
  avg = +avg.toFixed(2);
  return {
	min: min,
	max: max,
	avg: avg
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumElement = arr.reduce((sum, element) => sum + element, 0);
  return sumElement;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
	let max = Math.max(...arr);
  return Math.abs(max - min);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++ ) {
      if (arr [i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
  return sumEvenElement - sumOddElement;
  }
  
  function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;
      for (let i = 0; i < arr.length; i++) {
      if (arr [i] % 2 === 0) {
        sumEvenElement += arr [i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  }

function makeWork (arrOfArr, func) {
  maxWorkerResult = -Infinity;
  for ( let i = 0; i < arrOfArr.length; i++) {
    const sum = func(...arrOfArr[i]);
    if ( sum > maxWorkerResult) {
      maxWorkerResult = sum;
    } 
  }
  return maxWorkerResult;
}
