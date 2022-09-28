<template>
  <div class="m-3">
    <h1>Chap03 Data</h1>

    <A06TodoList></A06TodoList><br>
    <A05ContactList></A05ContactList><br>
    <A04RefProps></A04RefProps><br>
    <A03Emits></A03Emits><br>
    <A02Props title="App Data"></A02Props><br>
    <A01Component></A01Component>
  </div>
</template>

<script>
import A01Component from './components/A01Component.vue';
import A02Props from './components/A02Props.vue';
import A03Emits from './components/A03Emits.vue';
import A04RefProps from './components/A04RefProps.vue';
import A05ContactList from './components/A05ContactList.vue';
import A06TodoList from './components/A06TodoList.vue';

export default {
  name: 'App',
  components: {
    A01Component, A02Props, A03Emits, A04RefProps, A05ContactList,
    A06TodoList, 
  }
}
</script>

<style>
</style>
