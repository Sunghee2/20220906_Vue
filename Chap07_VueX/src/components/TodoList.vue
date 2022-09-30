<template>
  <div>
    <table class="table">
      <thead>
        <tr>
            <th style="{width:'10%'}">ID</th>
            <th>Todo</th>
            <th style="{width:'10%'}">Complete</th>
            <th style="{width:'10%'}">Delete</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="todo in todoList" :key="todo.id">
          <TodoListItem :todo="todo"/>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
  components: {TodoListItem},
  computed: {
    todoList() {
      return this.$store.state.todoListS.todoList;
    }
  }
}
</script>

<style scoped>

</style>
