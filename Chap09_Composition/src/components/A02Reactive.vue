<template>
  <h3>A02 Reactive</h3>  

  <div>
    Name: {{name}}<br />
    String: {{state.str}}<br />
    Number: {{state.num}}<br />
    Boolean: {{state.check}}<br />
    Array: <span v-for="(item, idx) in state.arr" :key="idx">{{item}}, </span><br />
    User: {{state.user.name}} / {{state.user.age}} / {{state.user.address}}<br />
  </div>
  <br />

  <div>
    <button   @click="changeName('놀부')">Name</button>
    
    <button   @click="changeString('Good Morning')">String</button>
    <button   @click="changeNumber(100)">Number</button>
    <button   @click="changeBoolean">Boolean</button>

    <button   @click="addArray">Add Array</button>
    <button   @click="updateArray(1, 2000)">Update Array</button>
    <button   @click="deleteArray(1)">Delete Array</button>

    <button   @click="addObject('address', 'Seoul')">Add Object</button>
    <button   @click="updateObject('address', 'Busan')">Update Object</button>
    <button   @click="deleteObject('address')">Delete Object</button>
  </div>
  <br />
</template>

<script setup>
import { ref, reactive, isRef, isReactive } from 'vue';
  
const name = ref('NolBu');

// 관련된 변수를 하나로 묶어 사용하고자 하는 경우
const state = reactive({
  str: 'Hello World',
  num: 10,
  check: true,
  arr: [10, 20],
  user: {name: 'HungBu', age: 30},
})

const changeName = x => name.value = x;

// reactive data는 .value 없이 바로 참조해 사용한다.
const changeString = x => state.str = x;
const changeNumber = x => state.num = x;
const changeBoolean = () => state.value = !state.check;
const addArray = () => {
  const random = Math.ceil(Math.random() * 100);
  state.arr.push(random);
};
const deleteArray = index => state.arr.splice(index, 1);
const updateArray = (index, value) => state.arr[index] = value;

const addObject = (key, value) => state.user[key] = value;
const updateObject = (key, value) => state.user[key] = value;
const deleteObject = key => delete state.user[key];

// type check
console.log(isRef(name));
console.log(isRef(state));

console.log(isReactive(name));
console.log(isReactive(state));

</script>
