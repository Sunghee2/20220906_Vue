<template>
  <h3>A05 Emits</h3>  

  <div>
    Name: {{name}} <br>
    <br>
    Object: {{stateData.num}} / {{stateData.arr[0]}} / {{stateData.user.name}}<br>
    Name: {{nameData}}<br />
    <br />

    <button @click="func('ABC')">Func</button>
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

let func = ref();

  const getName = evt => {
    name.value = evt;
  };
  const getData = evt => {
    nameData.value = evt.name;
    stateData.num = evt.state.num;
    stateData.arr = evt.state.arr;
    stateData.user = evt.state.user;  
    func.value = evt.changeName;
  };
</script>
