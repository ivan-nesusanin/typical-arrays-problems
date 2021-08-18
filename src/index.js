exports.min = function min(array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;
    let min = array[0];
    let i = 1;
    while (i < array.length) {
      if (min < array[i]) {
        i++;
      } else {
        min = array[i];
        i++;
      }
    }
    return min;
  };

exports.max = function max(array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;
    let max = array[0];
    let i = 1;
    while (i < array.length) {
      if (max > array[i]) {
        i++;
      } else {
        max = array[i];
        i++;
      }
    }
    return max;
  };

exports.avg = function avg(array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    const average = sum / array.length;
    return average;
  };
