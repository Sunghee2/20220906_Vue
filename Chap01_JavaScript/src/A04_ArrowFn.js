(function () {
  // 함수 리터럴. 함수 표현식
  const onAdd = function (x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
  };

  const onMin = function (x, y) {
    return `${x} - ${y} = ${x - y}`;
  };

  onAdd(10, 20);
  console.log(onMin(10, 20));
  console.log('');

  // ES6.
  // 함수 리터럴 방식만 변경 가능
  // function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
  const onMulti = (x, y) => {
    return `${x} * ${y} = ${x * y}`;
  };
  console.log(onMulti(10, 20));

  // 함수 {} 내부에 구문이 리턴문 1개면 return을 생략하고 한 줄에 적는다
  const onDiv = (x, y) => `${x} / ${y} = ${x / y}`;
  console.log(onDiv(10, 2));

  // 한줄인 경우 => 뒤의 값이 실행구문이면 알아서 실행한다
  const onOne = (x, y) => console.log(`${x} / ${y} = ${x / y}`);
  onOne(20, 2);
  console.log('');

  // 매개변수가 1개면 ()를 생략할 수 있다
  // ** => ES6에서 추가된 연산자(자승)
  const onTwo = x => 3 ** x;
  console.log(onTwo(3));

  // 함수(기존 함수 포함)의 매개변수는 기본갑을 가질 수 있다 ES6
  const onThree = (x = 10, y = 20) => {
    return `${x} / ${y} = ${x / y}`;
  };
  console.log(onThree());
  console.log(onThree(1, 2));

  // obj 객체는 window(global)에 선언된 변수라 obj의 this는 window가 된다.
  const obj = {
    name: '놀부',
    age: 30,
    // 객체 내부의 메서드는 자신이 선언된 객체 자체를 나타낸다(this => obj)
    info() {
      return `${this.name} / ${this.age}`;
    },
    // Arrow 함수는 자체 this가 없음. 자신이 속한 객체의 this를 따른다.
    // window.name / window.age
    // eslint-disable-next-line no-invalid-this
    display: () => `${this.name} / ${this.age}`,
  };

  console.log(obj.info());
  console.log(obj.display());
})();

/*
const window = {
  const x = 10;
  const name = 'Window';
  console.log(window.x);

  const obj = {         // obj의 this는 window
    name: 'ABC',
    info: function() {
      console.log(this.name);
    },
    // arrow 함수는 자신의 this가 없이 자신을 포함한 객체의 this가 자신의 this로 인식
    display: () => console.log(this.name);
  }

  console.log(window.obj);
  console.log(window.obj.name);
  console.log(window.obj.info());


  const view = () => console.log(this.x);
}

*/
