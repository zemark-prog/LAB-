'use strict';

const obj = {};




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
    newX += step * Math.cos(Math.PI / 3);
    newY += step * Math.sin(Math.PI / 3);

    //obj[`vert${vert}`].coords = [newX, newY];
    left = side - curMargin;
    vert++;
  }

  for (let curMargin = left; curMargin <= side; curMargin += step) {
    Object.defineProperty(obj, `vert${vert}`, {
      value: {
        coords: [newX, newY]
      },
      enumerable: true,
      writable: true
    });
    newX += -step * Math.cos(Math.PI / 3);
    newY += step * Math.sin(Math.PI / 3);
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
console.dir(obj);












/* eslint-disable camelcase */
/* eslint-disable max-len */
// 'use strict';
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// ctx.font = '17px Times new Roman';
// ctx.textBaseline = 'middle';
// ctx.textAlign = 'center';

// const startX = 300;
// const startY = 550;
// const obj = {};
// const radius = 20;

// const r = 15;
// const rloops = 3 * r / 4;
// const arrr = 5;
// const selfRadius = radius / 2;

// const arrowRadius = 5;


// ctx.beginPath();
// ctx.moveTo(startX, startY);//A
// ctx.lineTo(startX * 3, startY);//C
// ctx.lineTo(startX * 2, startY - 500);//B
// ctx.lineTo(startX, startY);
// ctx.stroke();

// const calcVertics = (n, P, x0, y0) => {
//   const step = P / n;
//   const side = P / 3;
//   let left = 0;
//   let vert = 1;
//   let newX = x0;
//   let newY = y0;

//   for (let curMargin = 0; curMargin <= side; curMargin += step) {


//     ctx.beginPath();
//     ctx.arc(newX, newY, 15, 0, 2 * Math.PI, false);
//     ctx.stroke();
//     Object.defineProperty(obj, `vert${vert}`, {
//       value: {
//         coords: [newX, newY]
//       },
//       enumerable: true,
//       writable: true
//     });
//     newX += step * Math.cos(Math.PI / 3);
//     newY += -step * Math.sin(Math.PI / 3);

//     //obj[`vert${vert}`].coords = [newX, newY];
//     left = side - curMargin;
//     vert++;
//   }

//   for (let curMargin = left; curMargin <= side; curMargin += step) {
//     ctx.beginPath();
//     ctx.arc(newX, newY, 15, 0, 2 * Math.PI, false);
//     ctx.stroke();
//     Object.defineProperty(obj, `vert${vert}`, {
//       value: {
//         coords: [newX, newY]
//       },
//       enumerable: true,
//       writable: true
//     });
//     newX += step * Math.cos(Math.PI / 3);
//     newY += step * Math.sin(Math.PI / 3);
//     //obj[`vert${vert}`].coords = [newX, newY];
//     left = side - curMargin;
//     vert++;
//   }

//   for (vert; vert <= n; vert++) {
//     ctx.beginPath();
//     ctx.arc(newX, newY, 15, 0, 2 * Math.PI, false);
//     ctx.stroke();
//     newX += -step;
//     Object.defineProperty(obj, `vert${vert}`, {
//       value: {
//         coords: [newX, newY]
//       },
//       enumerable: true,
//       writable: true
//     });
//     //obj[`vert${vert}`].coords = [newX, newY];
//   }
// };

// calcVertics(11, 1600, startX, startY);



// const A = [
//   [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
//   [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];







// const grafinfo = {};
// const neorgrafinfo = {};
// const loops = [];



// const makeCons = (matrix, obj) => {
//   for (const key in obj) {
//     obj[key].simplecon = [];
//     obj[key].doublecon = [];
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j]) {
//         const names = [`vert${i + 1}`, `vert${j + 1}`];
//         if (i === j) loops.push(`vert${i + 1}`);
//         else if (!matrix[j][i]) {
//           obj[names[0]].simplecon.push(`vert${j + 1}`);
//         } else {
//           obj[names[0]].doublecon.push(`vert${j + 1}`);
//         }
//       }
//     }
//   }
// };
// const center = (x0, y0, p) => {
//   const x = x0 + p / 8;
//   const y = y0 + p / 8;
//   return {
//     x,
//     y
//   };
// };

// let alpha;
// const drawLoops = (arr, obj, x0, y0) => {
//   const xc = center(x0, y0, 1600).x;
//   const yc = center(x0, y0, 1600).y;
//   for (const i in arr) {
//     alpha = Math.atan2(obj[arr[i]].coords[1] - yc, obj[[arr[i]]].coords[0] - xc);
//     const R = Math.sqrt((obj[arr[i]].coords[0] - xc) ** 2 + (obj[arr[i]].coords[1] - yc) ** 2) + r;
//     const xloops = xc + R * Math.cos(alpha);
//     const yloops = yc + R * Math.sin(alpha);
//     ctx.beginPath();
//     ctx.arc(xloops, yloops, rloops, 0, 2 * Math.PI, false);
//     ctx.stroke();
//   }
// };

// function drawArrowhead(x0, y0, x1, y1, radius, fillStyle = 'white', strokestyle = 'black') {
//   const x_center = x1;
//   const y_center = y1;
//   let angle;
//   let x;
//   let y;
//   ctx.fillStyle = fillStyle;
//   ctx.beginPath();
//   angle = Math.atan2(y1 - y0, x1 - x0);
//   x = radius * Math.cos(angle) + x_center;
//   y = radius * Math.sin(angle) + y_center;

//   ctx.moveTo(x, y);
//   angle += (1.0 / 3.0) * (2 * Math.PI);
//   x = radius * Math.cos(angle) + x_center;
//   y = radius * Math.sin(angle) + y_center;
//   ctx.lineTo(x, y);

//   angle += (1.0 / 3.0) * (2 * Math.PI);
//   x = radius * Math.cos(angle) + x_center;
//   y = radius * Math.sin(angle) + y_center;
//   ctx.lineTo(x, y);
//   ctx.closePath();
//   ctx.fill();
//   ctx.stroke();
// }

// const readyCons = (x0, y0, x1, y1) => {
//   const step = 1;
//   const alpha = Math.atan2(y1 - y0, x1 - x0);
//   const dx = step * Math.cos(alpha);
//   const dy = step * Math.sin(alpha);
//   let x = x0;
//   let y = y0;
//   while (true) {
//     x += dx;
//     y += dy;
//     if (Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2) < r + arrr) break;
//   }
//   const res = {
//     x,
//     y
//   };
//   return res;
// };

// function simpleAdditionalDots(x0, y0, x1, y1) {
//   const alpha = Math.atan2(y1 - y0, x1 - x0);
//   return {
//     dx: (r * 3.5) * Math.cos(Math.PI / 2 - alpha),
//     dy: (r * 3) * Math.sin(Math.PI / 2 - alpha)
//   };
// }

// function doubleAdditionalDots(x0, y0, x1, y1) {
//   const alpha = Math.atan2(y1 - y0, x1 - x0);
//   return {
//     dx: (r * 1.15) * Math.cos(Math.PI / 2 - alpha),
//     dy: (r * 1.15) * Math.sin(Math.PI / 2 - alpha)
//   };
// }

// const drawOrSimpleCons = obj => {
//   for (const key in obj) {
//     for (let i = 0; i < obj[key].simplecon.length; i++) {
//       const fromX = obj[key].coords[0];
//       const fromY = obj[key].coords[1];
//       const toX = obj[`${obj[key].simplecon[i]}`].coords[0];
//       const toY = obj[`${obj[key].simplecon[i]}`].coords[1];


//       if (Math.abs(obj[key].num - obj[`${obj[key].simplecon[i]}`].num === 1 || Math.abs(obj[key].num - obj[`${obj[key].simplecon[i]}`].num) === (Object.keys(obj).length - 1))) {
//         ctx.beginPath();
//         ctx.moveTo(fromX, fromY);
//         ctx.lineTo(toX, toY);
//         ctx.stroke();
//         const coordinates = readyCons(fromX, fromY, toX, toY);
//         drawArrowhead(fromX, fromY, coordinates.x, coordinates.y, arrr);
//       } else {
//         const { dx, dy } = simpleAdditionalDots(fromX, fromY, toX, toY);
//         let newX = (fromX + toX) / 2;
//         let newY = (fromY + toY) / 2;
//         newX += dx;
//         newY -= dy;
//         ctx.beginPath();
//         ctx.moveTo(fromX, fromY);
//         ctx.lineTo(newX, newY);
//         ctx.lineTo(toX, toY);
//         ctx.stroke();
//         const coordinates = readyCons(newX, newY, toX, toY);
//         drawArrowhead(newX, newY, coordinates.x, coordinates.y, arrr);
//       }
//     }
//   }
// };

// const drawSimpleCons = obj => {
//   for (const key in obj) {
//     for (let i = 0; i < obj[key].simplecon.length; i++) {
//       const fromX = obj[key].coords[0];
//       const fromY = obj[key].coords[1];
//       const toX = obj[`${obj[key].simplecon[i]}`].coords[0];
//       const toY = obj[`${obj[key].simplecon[i]}`].coords[1];


//       if (Math.abs(obj[key].num - obj[`${obj[key].simplecon[i]}`].num === 1 || Math.abs(obj[key].num - obj[`${obj[key].simplecon[i]}`].num) === (Object.keys(obj).length - 1))) {
//         ctx.beginPath();
//         ctx.moveTo(fromX, fromY);
//         ctx.lineTo(toX, toY);
//         ctx.stroke();
//         const coordinates = readyCons(fromX, fromY, toX, toY);
//       } else {
//         const { dx, dy } = simpleAdditionalDots(fromX, fromY, toX, toY);
//         let newX = (fromX + toX) / 2;
//         let newY = (fromY + toY) / 2;
//         newX += dx;
//         newY -= dy;
//         ctx.beginPath();
//         ctx.moveTo(fromX, fromY);
//         ctx.lineTo(newX, newY);
//         ctx.lineTo(toX, toY);
//         ctx.stroke();
//         const coordinates = readyCons(newX, newY, toX, toY);
//       }
//     }
//   }
// };

// const drawDoubleCons = obj => {
//   for (const key in obj) {
//     for (let i = 0; i < obj[key].doublecon.length; i++) {

//       const fromX = obj[key].coords[0];
//       const fromY = obj[key].coords[1];
//       const toX = obj[`${obj[key].doublecon[i]}`].coords[0];
//       const toY = obj[`${obj[key].doublecon[i]}`].coords[1];

//       ctx.beginPath();
//       ctx.moveTo(fromX, fromY);

//       const { dx, dy } = doubleAdditionalDots(fromX, fromY, toX, toY);
//       let newX = (fromX + toX) / 2;
//       let newY = (fromY + toY) / 2;
//       newX += dx;
//       newY -= dy;
//       ctx.lineTo(newX, newY);
//       ctx.lineTo(toX, toY);
//       ctx.stroke();
//       const coordinates = readyCons(newX, newY, toX, toY);
//       drawArrowhead(newX, newY, coordinates.x, coordinates.y, arrr);
//     }
//   }
// };


// const drawVertex = obj => {
//   for (const key in obj) {
//     ctx.beginPath();
//     ctx.arc(obj[key].coords[0], obj[key].coords[1], r, 0, 2 * Math.PI, false);
//     ctx.fill();
//     ctx.strokeText(obj[key].num, obj[key].coords[0], obj[key].coords[1]);
//     ctx.stroke();
//   }
// };

// makeCons(A, grafinfo);
// makeCons(A, neorgrafinfo);
// drawLoops(loops, grafinfo, 75, 100);
// drawLoops(loops, neorgrafinfo, 675, 100);
// drawOrSimpleCons(grafinfo);
// drawSimpleCons(neorgrafinfo);
// drawDoubleCons(grafinfo);
// drawVertex(grafinfo);
// drawVertex(neorgrafinfo);










// const calcVertics = (n, P, x0, y0, obj) => {
//   const step = P / n;
//   const side = P / 3;
//   let left = 0;
//   let vert = 1;
//   let newX = x0;
//   let newY = y0;

//   for (let curMargin = 0; curMargin <= side; curMargin += step) {
//     ctx.beginPath();
//     ctx.arc(newX, newY, 15, 0, 2 * Math.PI, false);
//     ctx.stroke();
//     Object.defineProperty(obj, `vert${vert}`, {
//       value: {
//         coords: [newX, newY],
//         num: vert,
//       },
//       enumerable: true,
//       writable: true
//     });
//     newX += step * Math.cos(Math.PI / 3);
//     newY += -step * Math.sin(Math.PI / 3);
//     left = side - curMargin;
//     vert++;
//   }

//   for (let curMargin = left; curMargin <= side; curMargin += step) {
//     ctx.beginPath();
//     ctx.arc(newX, newY, 15, 0, 2 * Math.PI, false);
//     ctx.stroke();
//     Object.defineProperty(obj, `vert${vert}`, {
//       value: {
//         coords: [newX, newY],
//         num: vert,
//       },
//       enumerable: true,
//       writable: true
//     });
//     newX += step * Math.cos(Math.PI / 3);
//     newY += step * Math.sin(Math.PI / 3);
//     left = side - curMargin;
//     vert++;
//   }

//   for (vert; vert <= n; vert++) {
//     ctx.beginPath();
//     ctx.arc(newX, newY, 15, 0, 2 * Math.PI, false);
//     ctx.stroke();
//     newX += -step;
//     Object.defineProperty(obj, `vert${vert}`, {
//       value: {
//         coords: [newX, newY],
//         num: vert,
//       },
//       enumerable: true,
//       writable: true
//     });
//   }
// };

// calcVertics(11, 1600, 50, 550, grafinfo);
// calcVertics(11, 1600, 650, 550, neorgrafinfo);

