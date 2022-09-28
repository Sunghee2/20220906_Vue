<template>
  <h3>A12 Array & Object</h3>

  <ul class="list-group">
    <li class="list-group-item"  v-for="(item, i) in names" :key="i">
      {{i + 1}} {{item}}
    </li>
  </ul>
  
  <hr>

  <ul class="list-group">
    <li class="list-group-item" v-for="(value, key, i) in user" :key="key">
      {{i + 1}} {{key.toUpperCase()}} - {{value}}
    </li>
  </ul>
  <br>

  <div>
    <button   @click="addArray">ADD Array</button>
    <button   @click="updateArray(1, 2000)">Change Array</button>
    <button   @click="deleteArray(1)">Delete Array</button>

    <button   @click="addObject('address', 'Seoul')">ADD Object</button>
    <button   @click="updateObject('address', 'Busan')">Change Object</button>
    <button   @click="deleteObject('address')">Delete Object</button>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      names: ['NolBu', 'HungBu'],
      user: {name: 'NolBu', age: 20}
    }
  },
  methods: {
    addArray() {
      const random = Math.ceil(Math.random() * 100);
      this.names.push(random);
    },
    updateArray(index, value) {
      // this.names.splice(index, 1, value);  // 2.X
      // Vue.set(this.names, index, value)    // 2.X
      this.names[index] = value;              // 3.X
    },
    deleteArray(index) {
      this.names.splice(index, 1);
    },
    addObject(key, value) {
      // this.user = { ...this.user, [key]: value };    // 2.X
      this.user[key] = value;                           // 3.X
    },
    updateObject(key, value) {
      // this.user = { ...this.user, [key]: value };    // 2.X
      this.user[key] = value;                           // 3.X
    },
    deleteObject(key) {
      // delete this.user[key];
      // this.user = { ...this.user };                  // 2.X
      delete this.user[key];                           // 3.X
    }
  }
}
</script>
