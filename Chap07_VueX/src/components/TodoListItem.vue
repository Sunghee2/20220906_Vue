<template>
  <tr>
    <td>{{todo.id}}</td>
    <td><span :class="{done: todo.done}">{{todo.text}}</span></td>
    <td>
      <button class="btn btn-primary"   @click="updateTodo(todo.id)">Complete</button>
    </td>
    <td>
      <button class="btn btn-danger"    @click="deleteTodo(todo.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    updateTodo(id) {
      // this.$store.commit('todoListS/TODOLIST_UPDATE', id);   // mutations
      this.$store.dispatch('todoListS/TODOLIST_UPDATE', id);    // actions
    },
    deleteTodo(id) {
      this.$store.commit('todoListS/TODOLIST_DELETE', id)
    },
  }
}
</script>

<style scoped>
  .done { text-decoration: line-through; }
</style>