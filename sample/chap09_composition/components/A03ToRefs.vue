<template>
  <h3>A02 Reactive</h3>  

  <div>
    Name: {{name}}<br />
    String: {{data.str}}<br />
    Number: {{data.num}}<br />
    Boolean: {{data.check}}<br />
    Array: <span v-for="(item, idx) in data.arr" :key="idx">{{item}}, </span><br />
    User: {{data.user.name}} / {{data.user.age}} / {{data.user.address}}<br />
    Function: {{data.onAdd(10, 20)}}<br />
  </div>
  <br />

  <div>
    <button @click="changeName">Name</button>
    
    <button @click="changeString('HangDan')">String</button>
    <button @click="changeNumer(100)">Number</button>
    <button @click="changeCheck">Boolean</button>

    <button @click="addArray">Add Array</button>
    <button @click="updateArray(0, 2000)">Update Array</button>
    <button @click="deleteArray(0)">Delete Array</button>

    <button @click="addObject('address', 'Seoul')">Add Object</button>
    <button @click="updateObject('address', 'Busan')">Update Object</button>
    <button @click="deleteObject('address')">Delete Object</button>
  </div>
  <br />

  <div>
    
  </div>
</template>

<script setup>
  import { ref, reactive, isRef, isReactive } from 'vue';

  const name = ref('NolBu');
  const data = reactive({
    str: 'Hello World',
    num: 30,
    check: true,
    arr: [10, 20],
    user: {name: 'HungBu', age: 20},
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`;
    }
  });

  const changeName = () => name.value = 'HungBu';
  const changeString = (x) => data.str = x;
  const changeNumer = (x) => data.num = x;
  const changeCheck = () => data.check = !data.check.value;

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    data.arr.push(random);
  }
  const updateArray = (index, value) => data.arr[index] = value;
  const deleteArray = index => data.arr.splice(index, 1)

  const addObject = (key, value) => data.user[key] = value;
  const updateObject = (key, value) => data.user[key] = value;
  const deleteObject = key => delete data.user[key];
  
</script>
