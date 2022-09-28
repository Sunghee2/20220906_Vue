<template>
  <h3>A13 Style & Class</h3>
    
  <div style="color: orange; font-size: 24pt;">{{hello}}</div>
  <div>{{hello}}</div>
  <div>{{hello}}</div>
  <br>

  <h3>Class Binding</h3>

  <div class="one two">{{hello}}</div>
  <div class="one"  :class="'two'">{{hello}}</div>
  <div class="one"  :class="['one', 'two', 'three']">{{hello}}</div>
  <div class="one"  :class="classAll">{{hello}}</div>
  <br>

  <div class="one"  :class="{'two': true, 'three': isChecked}">{{hello}}</div>
  <div class="one"  :class="{[classAll]: isChecked}">{{hello}}</div>
  <input type="checkbox" v-model="isChecked"> Check<br />
  <br>

  <input type="number" class="form-control" v-model.number="num" :class="warning" />  
</template>

<script>
export default {
  data() {
    return {
      hello: 'Hello World!!',
      isChecked: true,
      num: 10,
    }
  },
  computed: {
    classAll: () => 'one two three',
    warning() {
      return (this.num > 100) ? {warning: true} : {warning: false}
    }
  }
}
</script>

<style scoped>
  .one { color: orange; }
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
  .warning {background-color: orange; color: gray; }
</style>
