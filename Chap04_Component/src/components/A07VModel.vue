<template>
  <h3>A07 v-model</h3>
    
  Name: {{name}}<br>
  Age: {{age + 100}}<br>
  Num: {{num + 100}}<br>
  <hr>

  <!--
    v-model="name"
    :name="name" @update:modelValue="getNumber"
  -->
  <A07VModelName labelName="Name" v-model="name"></A07VModelName><br />
  <A07VModelName labelName="Age" v-model="age"></A07VModelName><br />
  <A07VModelNum labelName="Name" 
    :modelValue="num" @update:modelValue="getNumber"></A07VModelNum>
</template>

<script>
import A07VModelName from './childComps/A07VModelName.vue'
import A07VModelNum from './childComps/A07VModelNum.vue'

export default {
  components: {A07VModelName, A07VModelNum},
  data() {
    return {
      name: 'NolBu',
      num: 10,
      age: 30,
    }
  },
  methods: {
    getNumber(data) {
      this.num = Number(data);
    }
  }
}
</script>
