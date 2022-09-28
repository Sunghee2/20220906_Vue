<template>
  <table class="table">
    <thead>
      <tr>
        <th style="width: 10%">ID</th>
        <th>Todo</th>
        <th style="width: 10%">Complete</th>
        <th style="width: 10%">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todoList" :key="todo.id">
        <td>{{todo.id}}</td>
        <td><span :class="{'done': todo.done}">{{todo.text}}</span></td>
        <td><button class="btn btn-primary" @click="updateTodo(todo.id)">Complete</button></td>
        <td><button class="btn btn-danger"  @click="deleteTodo(todo.id)">Delete</button></td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  props: ['todoList', 'updateTodo', 'deleteTodo']
}
</script>

<style scoped>
  .done { text-decoration: line-through; }
</style>