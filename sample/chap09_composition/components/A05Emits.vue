<template>
  <h3>A05 Emits</h3>  

  <div>
    Name: <br>
    <br>
    Object: <br>
    Name: <br />
    etc: <br />

    <button>Func</button>
  </div>

  <hr>

  <A05EmitChild   @nameEvent="getName" @objEvent="getData"></A05EmitChild>
</template>

<script setup>
  import { reactive, ref } from 'vue';
  import A05EmitChild from './childComps/A05EmitChild.vue'

  const name = ref('');
  const nameData = ref('');
  const stateData = reactive({
    num: '',
    arr: [],
    user: {}
  });

  const getName = evt => {};
  const getData = evt => {};
</script>
