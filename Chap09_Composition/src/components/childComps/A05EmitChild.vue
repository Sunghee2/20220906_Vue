<template>
  <h5>A05 Emits Child Component</h5>  

  <div>{{name}}</div>

  <div>
    <button>Name Inline</button>
    <button   @click="sendName">Name Event</button>
    <button   @click="sendData">Data</button>
  </div>

  <button     @click="changeName('Hello World')">Click</button>
</template>

<script setup>
  import {ref, reactive, defineEmits } from 'vue'
  const emits = defineEmits(['nameEvent', 'objEvent']);

  const name = ref('NolBu');
  const state = reactive({
    num: 100,
    arr: [10, 20],
    user: {name: 'HungBu', age: 20}
  });

  const changeName = x => {
    console.log('changeName')
    name.value = x;
  }
  
  const sendName = () => {
    emits('nameEvent', name.value)
  };
  const sendData = () => {
    const data = {
      name: name.value,
      state: { ...state },
      changeName,
    }
    emits('objEvent', data);
  }
</script>
