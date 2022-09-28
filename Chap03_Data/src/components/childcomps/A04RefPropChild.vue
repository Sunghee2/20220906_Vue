<template>
  <h5>A04 Ref Props Child Component</h5>  

  <div>
    <input type="text" class="form-control"   :value="name"  ref="nameRef">
    <input type="text" class="form-control"   :value="age">
    <button @click="changeName"   ref="btnRef">Click</button>
  </div>
  <br>

</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu',
      age: 30
    }
  },
  methods: {
    changeName() {
      this.name = '놀부';
      this.$refs.nameRef.style.background = 'lightgray';

      // 부모 요소의 값 변경
      this.$parent.title = 'A04 Props Change';
    },
    changeAge() {
      this.age = 100;
    }
  }
}
</script>
