<template>
  <div>
    {{labelName}}: 
    <input type="text" class="form-control"
      :value="add" @input="changeAddress">
  </div>
</template>

<script>
export default {
  props: ['labelName', 'add', 'addModifiers'],      // modifiers가 인수 이름으로 받아야 한다
  emits: ['update:add'],
  methods: {
    changeAddress(evt) {
      let value = evt.target.value;
      if (this.addModifiers && this.addModifiers.upper) {
        value = value.toUpperCase();
      }
      this.$emit('update:add', value);
    }
  }
}
</script>
