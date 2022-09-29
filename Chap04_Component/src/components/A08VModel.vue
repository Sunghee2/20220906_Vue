<template>
  <h3>A08 v-model</h3>
    
  Name: {{name}}<br>
  Age: {{age + 100}}<br>
  Num: {{num + 100}}<br>
  <hr>

  인수를 이용해서 다른 이름으로 전달. 받는 자식도 인수 이름으로 받아 사용한다<br>
  <A08VModelChild labelName="Name" v-model:name="name" v-model:age="age" v-model:num="num"></A08VModelChild>
</template>

<script>
import A08VModelChild from './childComps/A08VModelChild.vue'

export default {
  components: {A08VModelChild},
  data() {
    return {
      name: 'NolBu',
      age: 30,
      num: 10
    }
  }
}
</script>
