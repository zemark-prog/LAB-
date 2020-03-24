'use strict';
const obj = {};

const calcVertics = (n, P, x0, y0) => {
  let step = P / n;
  const side = P / 4;
  let vert = 1;
  let newX = x0;
  let newY = y0;

  for (vert; vert <=  Math.floor(n / 4); vert++) {

    Object.defineProperty(obj, `vert${vert}`, {
      value: {
        coords: [newX, newY]
      },
      enumerable: true,
      writable: true
    });
    newY += step;
  }

  for (vert; vert <=  n / 2; vert++) {

    Object.defineProperty(obj, `vert${vert}`, {
      value: {
        coords: [newX, newY]
      },
      enumerable: true,
      writable: true
    });
    newX += step;
  }

  for (vert; vert <= newY; vert++) {

    Object.defineProperty(obj, `vert${vert}`, {
      value: {
        coords: [newX, newY]
      },
      enumerable: true,
      writable: true
    });
    newY += -step;
  }
  for (vert; vert <=  n; vert++) {
    step = side / (n / 4);
    Object.defineProperty(obj, `vert${vert}`, {
      value: {
        coords: [newX, newY]
      },
      enumerable: true,
      writable: true
    });
    newX += -step;
  }
};
calcVertics(11, 1600, 100, 100);
console.log(obj);
