/* eslint-disable require-jsdoc */

(function () {
  // 일반 함수.
  function fn() {
    console.log('funcion');
  }
  fn();

  /* 이런 식으로는 사용불가
    fn() => {

    }
  */

  const arr = [10, 11, 100, 101, 1000];

  // 익명함수(이름이 없는 함수)
  // forEach
  arr.forEach((item, index) => {
    console.log(item, index);
  });

  let total = 0;
  arr.forEach(item => (total = total + item));
  console.log(total);

  // map -> 순환은 forEach와 동일하지만 return 값을 기반으로 새로운 배열을 생성한다.
  const mapArr = arr.map(item => item * 2);
  console.log(arr);
  console.log(mapArr);

  // filter => 순환은 map과 동일하지만 return 값이 true면 새로운 배열에 추가 false면 skip
  const filterArr = arr.filter(item => item % 2 === 0);
  console.log(arr);
  console.log(filterArr);
})();
