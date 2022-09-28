<template>
  <h3>A11 Scoped Slot</h3>

  <div>
    자식 컴퍼넌트의 데이터를 부모 컴퍼넌트에서 조작.
  </div>

  <div>
    <input type="text" class="form-control" v-model.number="kor">
    <input type="text" class="form-control" v-model.number="eng">
  </div>

  <!-- slot props라 한다. 속성명에 name은 주의(slot의 이름으로 사용된다) -->
  <slot nickname="NolBu" :kor="kor" :eng="eng" :user="user" :changeKor="changeKor"></slot>
  <slot name="jumsu" nickname="향단" :kor="kor" :eng="eng" :user="user" :changeKor="changeKor"></slot>

</template>

<script>
export default {
  data() {
    return {
      kor: 90,
      eng: 70,
      user: {name: 'HungBu', age: 20, address: 'Busan'},
    }
  },
  methods: {
    changeKor(kor) {
      this.kor = kor;
    }
  }
}
</script>
