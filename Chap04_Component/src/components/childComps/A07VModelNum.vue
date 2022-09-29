<template>
  <div>
    {{labelName}}: 
    <input type="text" class="form-control"
      :value="modelValue"
      @input="changeNum">
  </div>
</template>

<script>
export default {
  props: ['labelName', 'modelValue'],
  emits: ['update:modelValue'],
  methods: {
    changeNum(evt) {
      this.$emit('update:modelValue', evt.target.value)
    }
  }
}
</script>
