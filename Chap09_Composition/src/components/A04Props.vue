<template>
  <h3>A04 Props Component</h3>

  <div>
    Name: {{name}}<br>
    Age: {{age}}<br>
    Address: {{address}}<br>
    Array: {{arr[0]}}<br>
    User: {{user.name}}<br>
    isChecked: {{isChecked}}<br>
    onAdd: {{onAdd(10, 20)}}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['name', 'age', 'address', 'arr', 'user', 'isChecked', 'onAdd']);
// defineProps({
//   name: {type: ...}
// })

/*
  props: ['name', 'age', 'address', 'arr', 'user', 'isChecked', 'onAdd'],
  setup(props) {
    
  }
*/
</script>
