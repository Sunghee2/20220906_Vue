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
    일반적 연산: {{1 + 2}}<br>
    속성 참조: {{arr.length}}<br>
    속성 참조 연산: {{arr.length * 100}}<br>
    비교 연산: {{arr.length >= 10}}<br>
    비교 연산: {{arr.length >= 10 && arr[0] === 10}}<br>
    삼항 연산: {{name === '놀부' ? '관리자' : '일반 유저'}}<br>
  </div>
  <br>

  <div>
    <h5>3. 바인딩 관련 지시자</h5>
    지시자에 값으로 지정하는 값은 항상 변수 또는 함수 이름을 의미한다.<br>
    Binding: {{dom}}<br />
    v-text: <span v-text="dom"></span><br>
    v-html: <span v-html="dom"></span><br>
    
    v-once는 한번 바인딩 된 후 값이 변경되더라도 View가 변경되지 않음<br>
    v-once: <span v-once>{{dom}}</span><br>

    v-pre는 View에서 {{}}를 바인디 표현법이 아닌 일반적인 텍스트로 인식 시키고자 할 경우<br>
    v-pre: <span v-pre>{{dom}}</span><br>
    <br>
    <button v-on:click="changeDOM('Good Morning')">Change</button>
    <button @click="changeDOM('Good Evening')">Change</button>
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
      dom: '<b>Hello World</b>',
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
    },
    changeDOM(dom) {
      // data의 값을 참조하는 경우 template에서는 this를 생략하지만 methods 내부에서는 항상 this로 참조
      this.dom = '<b><i>' + dom + '</i></b>'
    }
  },
  computed: {},
  watch: {}
}
</script>
