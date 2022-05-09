const map = function (cb) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    this[i];
    array.push(cb(this[i], i));
  }

  return array;
};

const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.map((e, i) => e * 2);

console.log(arr2);
