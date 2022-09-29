<template>
  <div>
    {{labelName}}: 
      <input type="text" class="form-control" 
        :value="name" @input="$emit('update:name', $event.target.value)">
    Age: 
      <input type="text" class="form-control" 
        :value="age" @input="$emit('update:age', $event.target.value)">
    Num: 
      <input type="text" class="form-control" 
        :value="num" @input="$emit('update:num', $event.target.value)">
  </div>
</template>

<script>
export default {
  // v-model:name 형태로 인수가 붙은 요소는 인수 이름으로 받는다.
  props: ['labelName', 'name', 'age', 'num'],
  emits: ['update:name', 'update:age', 'update:num', ],
}
</script>

