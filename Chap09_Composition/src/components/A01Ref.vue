<template>
  <h3>A01 Ref</h3>  

  <div>
    Name: {{name}} <br />
    String: {{str}}<br />
    Number: {{num}}<br />
    Boolean: {{check}}<br />
    Array: <span v-for="(item, idx) in arr" :key="idx">{{item}}, </span><br />
    User: {{user.name}} / {{user.age}} / {{user.address}}<br />
    Function: {{onAdd(10, 20)}}<br />
  </div>
  <br />

  <div>
    <button   @click="changeName">Name</button>
    
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

  <div>
    <input type="text" class="form-control" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// reactive data가 아닌 일반 값. 따라서 변경되도 화면 갱신 작업은 이루어지지 않음.
let name = 'NolBu';

// reactive data 정의. script 내부에서는 "변수명.value", view에서는 이름만 참조
const str = ref('Hello World');
const num = ref(10);
const check = ref(true);
const arr = ref([10, 20]);
const user = ref({ name: 'Nolbu', age: 30 });
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

const changeName = () => name = '놀부';
const changeString = x => str.value = x;
const changeNumber = x => num.value = x;
const changeBoolean = () => check.value = !check.value;
const addArray = () => {
  const random = Math.ceil(Math.random() * 100);
  arr.value.push(random);
};
const deleteArray = index => arr.value.splice(index, 1);
const updateArray = (index, value) => arr.value[index] = value;

const addObject = (key, value) => user.value[key] = value;
const updateObject = (key, value) => user.value[key] = value;
const deleteObject = key => delete user.value[key];

/*
export default {
  setup() {
    const name = ref('Nolbu')

    // view에서 사용하는 변수, 함수는 모두 리턴되야 한다.
    return {name}
  }
}
*/
</script>
