<template>
  <h3>{{title}}</h3>
  바인딩 식 내부에서는 식만 사용 가능<br>
  <br>

  <div>
    <h5>1. 일반적 바인딩</h5>
    일반적인 단방향 바인딩: {{name}}<br>
    함수의 리턴값: {{onAdd(10, 20)}}<br>
    함수의 리턴값: {{onMin(10, 20)}}<br>
    배열: {{arr[0]}} / {{arr[1]}} / {{arr[2]}}<br>
    객체: {{user.name}} / {{user.age}} / {{user.address}}<br>
    Boolean: {{isChecked ? '동의' : '동의 안함'}}
  </div>
  <br>

  <div>
    <h5>2. 바인딩 연산</h5>
    일반적 연산: <br>
    속성 참조: <br>
    속성 참조 연산: <br>
    비교 연산: <br>
    비교 연산: <br>
    삼항 연산: <br>
  </div>
  <br>

  <div>
    <h5>3. 바인딩 관련 지시자</h5>
    v-text: <span></span><br>
    v-html: <span></span><br>
    v-once: <span></span><br>
    v-pre: <span></span><br>
    <br>
    <button>Change</button>
    <button>Change</button>
    <br>
  </div>

  <div>
    Data에 존재하지 않는 변수: 
    Data에 존재하지 않는 객체: 
  </div>
</template>

<script>
export default {
  data: function () {
    // 이 변수가 변경되면 Vue는 변경된 값을 기반으로 화면 갱신 작업을 해 준다.
    return {
      title: 'A02 Binding Component',
      name: '놀부',
      arr: [10, 20],
      user: { name: 'HungBu', age: 20 },
      isChecked: true,
    }
  },
  methods: {
    // 함수를 정의한다.
    onAdd: function (x, y) {
      // console.log(this);                // Vue
      // console.log(this.title);
      return `${x} + ${y} = ${x + y}`;
    },
    onMin: (x, y) => {
      // console.log(this);                // window
      // console.log(this.title);       // Error
      return `${x} - ${y} = ${x - y}`;
    }
  },
  computed: {},
  watch: {}
}
</script>
