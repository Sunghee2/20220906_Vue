<template>
  <div class="m-3">
    <h1>Chap05 Axios</h1>

    <A02Modal></A02Modal><br>
    <A01Axios></A01Axios>
  </div>
</template>

<script>
// npm i axios
import A01Axios from './components/A01Axios.vue';
import A02Modal from './components/A02Modal.vue';

export default {
  name: 'App',
  components: {A01Axios, A02Modal}
}
</script>
