const obj = {
  name: 'NolBu',
  age: 30,
};

const ary = ['A', 'B', 'C'];
console.log(obj, ary);

// const name = obj.name;
// const age = obj.age;

// 변수 이름은 객체의 key와 동일한 이름이어야 한다.
const {name, age} = obj;
console.log(name, age);

// 이미 선언된 변수를 재 선언하면 에러. 따라서 alias를 이용.
const {name: nickname, age: num} = obj;
console.log(nickname, num);

// 기본값을 할당할 수 있다.
const {name: x = 'unknown', age: y = 0, address = 'Seoul'} = obj;
console.log(x, y, address);

// 배열은 alias가 없음
const [a, b, c] = ary;
console.log(a, b, c);

// 기본 값은 할당 가능
const [a1 = 1, b1 = 2, c1 = 3, d1 = 4] = ary;
console.log(a1, b1, c1, d1);
