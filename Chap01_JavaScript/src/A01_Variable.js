console.log('name: ' + nickname + ' typeof: ' + typeof nickname);

var nickname = 'NolBu';
console.log('name: ' + nickname + ' typeof: ' + typeof nickname);

nickname = 10;
console.log('name: ' + nickname + ' typeof: ' + typeof nickname);

// 재 정의 에러 아님
var nickname = true;
console.log('name: ' + nickname + ' typeof: ' + typeof nickname);

// 함수 {} 이외의 변수 범위를 갖지 않음
if (true) {
  var nickname = 'HungBu';
  console.log('IF Inner name: ' + nickname + ' typeof: ' + typeof nickname);
}
console.log('IF Outer name: ' + nickname + ' typeof: ' + typeof nickname);

for (var i = 0; i < 3; i++) { }
console.log('For i: ' + i + ' typeof: ' + typeof i);
console.log('');

// ES6
let age = 10;
console.log('age: ' + age + ' typeof: ' + typeof age);

age = 'HangDan';
console.log('age: ' + age + ' typeof: ' + typeof age);

// 1. var, let, const 키워드를 이용한 동일 변수명 재 선언은 에러
// var age = 20;        // Error
// let age = 20;        // Error

// 2. 모든 {}에서 범위(scope)를 갖는다
if (true) {
  let age = 100;
  console.log('if inner age: ' + age + ' typeof: ' + typeof age);
}
console.log('if outer age: ' + age + ' typeof: ' + typeof age);

for (let k = 0; k < 3; k++) { }
// console.log('For k: ' + k + ' typeof: ' + typeof k);     // Error
console.log('');




