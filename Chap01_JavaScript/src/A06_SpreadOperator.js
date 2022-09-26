/* eslint-disable require-jsdoc */
console.log([10, 11, 100]);
// arr[0], arr[1], arr[2]
console.log(...[10, 11, 100]);

console.log('NolBu');
console.log(...'NolBu');
console.log('');

// ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷
function spreadFun(a, b, c, d, e, ...rest) {
  console.log(`a => ${a}`);
  console.log(`b => ${b}`);
  console.log(`c => ${c}`);
  console.log(`d => ${d}`);
  console.log(`e => ${e}`);
  console.log(`rest => ${rest} / ${rest.length}`);
}

spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
console.log('');

// 배열 합치기.
const aryOne = [10, 20, 30];
const aryTwo = [1, 2, 3, ...aryOne];
console.log(aryTwo);

// 복사 개념이다.
const aryThree = [...aryOne];
console.log(aryThree);
console.log(aryOne === aryThree);
console.log('');

// Object
const objOne = {
  id: 1,
  name: 'NolBu',
};

// 겹치는 요소는 아래 요소의 값으로 덮어쓴다.
const objTwo = {
  id: 2,
  address: 'Seoul',
  ...objOne,
};
console.log(objTwo);

const objThree = {
  ...objOne,
  id: 3,
  address: 'InChen',
};
console.log(objThree);
