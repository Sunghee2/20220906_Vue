<template>
  <h5>A06 Inject</h5>

  Name: {{name}}<br>
  User: {{user.name}} / {{user.age}} <br>
  Obj: {{obj.name}} / {{obj.age}}<br>
    {{obj.arr[0]}} / {{obj.user.name}}
  <br>

  <button   @click="methods.changeName">Name</button>
  <button   @click="methods.changeUser">User</button><br>

  <button   @click="methods.changeObjName">Name</button>
  <button   @click="methods.changeObjAge">User</button>
  <button   @click="methods.changeArr">User</button>
  <button   @click="methods.changeObj('ABC')">User</button>
  <br>  
</template>

<script setup>
import { inject } from 'vue';

const name = inject('name');
const user = inject('user');
const obj = inject('obj');
const methods = inject('methods');
</script>

