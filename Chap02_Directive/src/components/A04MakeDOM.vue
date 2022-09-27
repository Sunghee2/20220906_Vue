<template>
  <h3>A04 DOM Directive</h3>
  <br>

  <h5>1. v-show</h5>
  <div v-show="isChecked">
    v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다. v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.
  </div>
  <br />

  <h5>2. v-if</h5>
  <div v-if="name === 'nolbu'">
    Vue에서는 v-if 디렉티브를 사용하여 조건부 블럭을 작성할 수 있습니다.
  </div>
  <div v-else-if="name === 'hungbu'">
    v-else-if는 이름에서 알 수 있듯, v-if에 대한 “else if 블록” 역할을 합니다. 또한 여러 개를 사용할 수 있습니다.
  </div>
  <div v-else>
    v-else 디렉티브를 사용하여 v-if에 대한 “else 블록”을 나타낼 수 있습니다
  </div>
  <br>

  <h5>3. v-for</h5>
  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Kor</th>
        <th>Eng</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in students" v-bind:key="index">
        <template v-if="item.kor >= 90">
          <td>{{index}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.kor}}</td>
          <td>{{item.eng}}</td>
        </template>
      </tr>
    </tbody>
  </table>
  <br>

  <ul>
    <li v-for="(value, key, index) in students[0]" :key="index">{{key}} / {{value}} / {{index}}</li>
  </ul>

  <ul>
    <li v-for="idx in 5" :key="idx">{{idx}}</li>
  </ul>

  <div>
    <template v-for="(item,index) in items" :key="index">
      <input type="checkbox">{{index + 1}}, {{item.name}}<br>
    </template>
  </div>
  <button v-on:click="deleteItems">Delete</button>

  <div>
    <button class="btn btn-outline-primary btn-sm" v-on:click="changeCheck">Check</button>
    <button class="btn btn-outline-primary btn-sm" v-on:click="name = 'nolbu'">IF</button>
    <button class="btn btn-outline-primary btn-sm" v-on:click="name = 'hungbu'">Else IF</button>
    <button class="btn btn-outline-primary btn-sm" v-on:click="name = 'abc'">Else</button><br>
  </div>  
</template>

<script>
const data = {
  students: [
    { name: 'HongGilDong', age: 20, kor: 100, eng: 80 },
    { name: 'NolBu', age: 50, kor: 90, eng: 90 },
    { name: 'HungBu', age: 40, kor: 70, eng: 60 },
  ],
  items: [
    {id: 0, name: 'NolBu', age: 40},
    {id: 1, name: 'HungBu', age: 30},
    {id: 2, name: 'HangDan', age: 20},
  ]
}

export default {
  data() {
    return {
      students: data.students,
      items: data.items,
      isChecked: true,
      name: 'nolbu',

    }
  },
  methods: {
    changeCheck() {
      this.isChecked = !this.isChecked;
    },
    deleteItems() {
      this.items.splice(0, 1);
    }
  }
}
</script>
