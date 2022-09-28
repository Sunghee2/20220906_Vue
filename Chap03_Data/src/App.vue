<template>
  <div class="m-3">
    <h1>Chap03 Data</h1>

    <A02Props title="App Data"></A02Props><br>
    <A01Component></A01Component>
  </div>
</template>

<script>
import A01Component from './components/A01Component.vue';
import A02Props from './components/A02Props.vue';

export default {
  name: 'App',
  components: {
    A01Component, A02Props, 
  }
}
</script>

<style>
</style>
