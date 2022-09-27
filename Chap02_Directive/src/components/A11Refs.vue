<template>
  <h3>A11 Refs</h3>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" name="msg"    :value="message"  ref="msgRef">
      <button type="submit" class="btn btn-danger"    @click.prevent="getMessage">ADD</button>
    </div>
  </form>
  <br>

  <div>
    Message: {{message}}
  </div>  
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World'
    }
  },
  methods: {
    getMessage(evt) {
      // const msg = document.querySelector('input[name="msg"]').value;
      // this.$refs.msgRef => JavaScript 객체
      const msg = this.$refs.msgRef.value
      this.message = msg;
    }
  },
  mounted() {
    this.$refs.msgRef.style.background = 'orange';
    this.$refs.msgRef.focus();
  }
}
</script>
