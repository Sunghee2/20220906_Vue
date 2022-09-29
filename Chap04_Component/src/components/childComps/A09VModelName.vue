<template>
  <div>
    {{labelName}}: 
    <input type="text" class="form-control"
      :value="modelValue" @input="changeName">
  </div>
</template>

<script>
export default {
  // modelModifiers => 수식자
  props: ['labelName', 'modelValue', 'modelModifiers'],
  emits: ['update:modelValue'],     // 생략 가능
  methods: {
    changeName(evt) {
      // console.log(this.modelModifiers);
      let value = evt.target.value;
      if (this.modelModifiers && this.modelModifiers.upper) {
        value = value.toUpperCase();
      }
      this.$emit('update:modelValue', value);
    }
  }
}
</script>
