function sleep(ms) {
  const wakeUp = Date.now() + ms;
  while (Date.now() < wakeUp) {}
}

function normal() {
  console.log('1. START');
  sleep(3000);
  console.log('2. END');
}
// normal();

// callback 예제
function callFunc(x, y, cb) {
  const result = x + y;
  // value => console.log(value * 2)
  cb(result);
}
callFunc(10, 20, value => console.log(value / 2));
callFunc(10, 20, value => console.log(value * 2));
console.log('');

// JavaScript의 시간이 걸리는 작업은 모두 callback 처리
let result = 0;
function one(ms) {
  console.log('1 START');
  setTimeout(function () {
    result = 1000;
    console.log('3 Rsult=> ' + result);
  }, 2000);
  console.log('2 END');
}
console.log(result);
one(3000);
