<template>
  <h3>A05 Method</h3>

  <div>
    <h5>1. Method</h5>

    onAdd: {{onAdd(10, 20)}}<br>
    <br>
    
    Name: {{name}}
    <input type="text" name="name" class="form-control" :value="name" v-on:input="changeString">
    Num: {{num}}
    <input type="text" name="num" class="form-control" :value="num" v-on:input="changeNumber">
  </div>
  <br>

  <div>
    <h5>2. Computed</h5>
    Computed: {{total}} <br>
    Methods: {{totalMethod()}}<br>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu',
      num: 10
    }
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`;
    },
    changeString(evt) {
      this[evt.target.name] = evt.target.value;
    },
    changeNumber(evt) {
      let value = Number(evt.target.value);
      if (isNaN(value)) value = 0;
      // this.num = value;
      this[evt.target.name] = value;
    },
    totalMethod() {
      console.log('methods...');
      let total = 0;
      for (let i = 0; i <= this.num; i++) {
        total += i;
      }
      return total;
    }
  },
  // 기존의 값을 조작 한 후의 값을 참조해서 사용하는 경우. 항상 Return 값이 있어야 한다.
  // 참조는 Getter로 속성 참조 방식으로 참조된다.
  // 내부에서 사용한 data 변수와 함수가 변경되는 경우만 갱신된다.
  computed: {
    total() {
      console.log('computed...');
      let total = 0;
      for (let i = 0; i <= this.num; i++) {
        total += i;
      }
      return total;
    }
  }
}
</script>
