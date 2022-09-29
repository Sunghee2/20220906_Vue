<template>
  <h3>A09 v-model 수식자</h3>
    
  Name: {{name}}<br>
  Num: {{address}}<br>
  
  <hr>

  <A09VModelName  labelName="name"    v-model.upper="name"></A09VModelName><br />
  <A09VModelNum   labelName="address" v-model:add.upper="address"></A09VModelNum>
</template>

<script>
import A09VModelName from './childComps/A09VModelName.vue'
import A09VModelNum from './childComps/A09VModelNum.vue'

export default {
  components: {A09VModelName, A09VModelNum},
  data() {
    return {
      name: 'NolBu',
      address: 'Seoul'
    }
  }
}
</script>

