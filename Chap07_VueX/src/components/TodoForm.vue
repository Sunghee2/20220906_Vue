<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" ref="todoRef"
        :value="text" @input="evt => changeText(evt.target.value)"/>
      <div class="input-group-append">
          <button type="submit" class="btn btn-primary mr-1"
            @click.prevent="sendData">Submit</button>
      </div>
    </div>  
  </form>
</template>

<script>
export default {
  computed: {
    text() {
      return this.$store.state.todoListS.text;
    },
  },
  methods: {
    sendData() {
      this.$store.commit('todoListS/TODOLIST_ADD', this.text);
      this.$refs.todoRef.focus();
      this.changeText('')
    },
    changeText(text) {
      this.$store.commit('todoListS/TODOLIST_CHANGETEXT', text);
    }
  }
}
</script>

<style scoped>

</style>