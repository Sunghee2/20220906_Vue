<template>
  <h3>A03 toRefs</h3>  

  <div>
    Name: {{name}}<br />

    String: {{str}}<br />
    Number: {{num}}<br />
    Boolean: {{check}}<br />
    Array: <span v-for="(item, idx) in arr" :key="idx">{{item}}, </span><br />
    User: {{user.name}} / {{user.age}} / {{user.address}}<br />
    Function: {{onAdd(10, 20)}}<br />
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
  import { ref, reactive, toRefs, isRef, isReactive } from 'vue';

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

  // destructuring 구문을 이용
const { str, num, check, arr, user, onAdd } = toRefs(data);

console.log(isRef(str));
console.log(isReactive(str));

</script>
