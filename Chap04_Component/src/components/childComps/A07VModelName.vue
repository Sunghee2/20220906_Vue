<template>
  <div>
    {{labelName}}: {{modelValue}} 
    <input type="text" class="form-control" 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script>
export default {
  // v-model: value => modelValue, 
  // event name: "update:modelValue"
  props: ['labelName', 'modelValue'],
  emits: ['update:modelValue']
}
</script>
