// const fs = require('fs');
// const filePath =
//   process.platform === 'linux'
//     ? '/dev/stdin'
//     : `${__dirname}/../../example.txt`;
// const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

// const [W, H] = inputs[0].split(' ').map(Number);
// const map = [];
// for (let i = 1; i <= H; i++) {
//   map.push(inputs[i].split(' ').map(Number));
// }

// // dx와 dy를 두 개로 나눕니다. 하나는 y가 홀수일 때, 하나는 y가 짝수일 때 사용합니다.
// const dxOdd = [1, 0, -1, -1, 0, 1];
// const dyOdd = [-1, -1, 0, 1, 1, 0];
// const dxEven = [1, 0, -1, -1, 0, 1];
// const dyEven = [0, -1, -1, 0, 1, 1];

// let answer = 0;

// for (let x = 0; x < W; x++) {
//   for (let y = 0; y < H; y++) {
//     if (map[y][x] === 1) {
//       for (let dir = 0; dir < 6; dir++) {
//         // 현재 y의 값이 홀수인지 짝수인지에 따라 dx와 dy를 선택합니다.
//         const dx = y % 2 === 0 ? dxEven : dxOdd;
//         const dy = y % 2 === 0 ? dyEven : dyOdd;

//         let nx = x + dx[dir];
//         let ny = y + dy[dir];

//         if (nx < 0 || ny < 0 || nx >= W || ny >= H || map[ny][nx] === 1) {
//           continue;
//         }

//         answer += 1;
//       }
//     }
//   }
// }

// console.log(answer);
