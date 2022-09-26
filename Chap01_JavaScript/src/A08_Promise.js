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
// console.log(result);
// one(3000);

function two(ms) {
  console.log('1 START');
  setTimeout(function () {
    result = 1000;
    console.log('3 Rsult=> ' + result);

    setTimeout(() => {
      result = result + 1000;
      console.log('4 Rsult=> ' + result);
    }, result);
  }, 2000);
  console.log('2 END');
}
// two(3000);

// promise
function promise(ms) {
  console.log('1 START');
  const promise = new Promise((resolve, reject) => {
    // err => console.error(err)
    // eslint-disable-next-line prefer-promise-reject-errors
    if (ms < 1000) reject('시간이 너무 짧습니다');

    setTimeout(() => {
      const result = 1000;
      // result => console.log(result)
      resolve(result);
      console.log(`Result => ${result}`);
    }, 3000);
  });
  console.log('2 END');
  return promise;
}

/*
// 값 받아 처리
promise(200)
  // resolve 함수를 정의
  .then(result => {
    console.log(result);
    // 결과를 받아 다른 시간 걸리는 작업을 다시 호출. 결과는 다음 then이 받아 처리한다.
    return promise(result);
  })
  .then(result => console.log(result))
  .catch(err => console.error(err));
*/

// ES2017 async / await 구문. 함수로 묶어야 한다.
// 함수는 함수명 앞에  async를 비동기 명령 앞에는 await를 붙여 호출한다.
// 비 동기를 동기화 처리
async function promiseOne(ms) {
  try {
    console.log('1 promiseOne START');
    // 값을 받을때까지 wait
    const result = await promise(2000);
    console.log(`3. promiseOne Result=> ${result}`);

    const value = await promise(result);
    console.log(`4. promiseOne Result=> ${value}`);

    console.log('2. promiseOne END');
  } catch (err) {
    console.log('Error');
  }
}

promiseOne(2000);

console.log(' ---------------- END -------------------');
