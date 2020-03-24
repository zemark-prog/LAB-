'use strict';

const obj = {};
const matrix = [
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const calcVertics = (n, P, x0, y0) => {
  const step = P / n;
  const side = P / 3;
  let left = 0;
  let vert = 1;
  let newX = x0;
  let newY = y0;

  for (let curMargin = 0; curMargin <= side; curMargin += step) {

    Object.defineProperty(obj, `vert${vert}`, {
      value: {
        coords: [newX, newY]
      },
      enumerable: true,
      writable: true
    });
    newX += -step * Math.cos(Math.PI / 3);
    newY += -step * Math.sin(Math.PI / 3);

    //obj[`vert${vert}`].coords = [newX, newY];
    left = side - curMargin;
    vert++;
  }

  for (let curMargin = left; curMargin <= side; curMargin += step) {
    newX += -step * Math.cos(Math.PI / 3);
    newY += step * Math.sin(Math.PI / 3);
    Object.defineProperty(obj, `vert${vert}`, {
      value: {
        coords: [newX, newY]
      },
      enumerable: true,
      writable: true
    });
    //obj[`vert${vert}`].coords = [newX, newY];
    left = side - curMargin;
    vert++;
  }

  for (vert; vert <= n; vert++) {
    newX += -step;
    Object.defineProperty(obj, `vert${vert}`, {
      value: {
        coords: [newX, newY]
      },
      enumerable: true,
      writable: true
    });
    //obj[`vert${vert}`].coords = [newX, newY];
  }
};
calcVertics(11, 1000, 500, 500);



for (const key in obj) {  //adding props
  obj[key].cons = [],
  obj[key].soloDirected = [],
  obj[key].bothDirected = [];
}
const selfConnected = [];

for (let i = 0; i < matrix.length; i++) { //find connection
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j]) {
      const names = [`vert${i + 1}`, `vert${j + 1}`];
      if (!matrix[j][i]) obj[names[0]].soloDirected.push(`vert${j + 1}`);
      else if (i !== j) obj[names[0]].bothDirected.push(`vert${j + 1}`);
      else selfConnected.push(`vert${i + 1}`);
      obj[names[0]].cons.push(j + 1);
    }
  }
}
console.log(obj);
