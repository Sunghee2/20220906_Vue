<template>
  <h3>A11 Scoped Slot</h3>

  <A11ScopeSlotChild>
    <!-- one이 slot에서 props로 날린 값을 참조하는 참조 변수가 된다-->
    <template v-slot:default="one">
      Name: {{one.nickname}}<br>
      Kor: {{one.kor}} / {{one.eng}}<br>
      User:  {{one.user.name}} / {{one.user.age}}<br>
      <button @click="one.changeKor(300)">KOR</button>
      <br>
      <br>
    </template>

    <template #jumsu="one">
      Name: {{one.nickname}}<br>
      Kor: {{one.kor}} / {{one.eng}}<br>
      User:  {{one.user.name}} / {{one.user.age}}<br>
      <button @click="one.changeKor(200)">KOR</button>
      <br>
      <br>
    </template>

  </A11ScopeSlotChild>
</template>

<script>
import A11ScopeSlotChild from './childcomps/A11ScopeSlotChild.vue'

export default {
  components: {A11ScopeSlotChild},
  
}
</script>
