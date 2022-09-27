<template>
  <h3>A07 Watch</h3>

  <div>
    <input type="text" class="form-control" v-model="x"><br>
    <input type="text" class="form-control" v-model="y"><br>
    Total: {{total}} / <br >
    <br>

    <input type="text" class="form-control" v-model="name"><br>
    <table class="table">
      <thead>
        <tr><th>NO</th><th>NAME</th><th>TEL</th><th>ADDRESS</th></tr>
      </thead>
      <tbody>
        <tr v-for="item in contactList" :key="item.no">
          <td>{{item.no}}</td>
          <td>{{item.name}}</td>
          <td>{{item.tel}}</td>
          <td>{{item.address}}</td>
        </tr>
      </tbody>
    </table>

    <div v-show="isLoading">Loading....</div>
  </div>  
</template>

<script>
const baseURL = 'http://sample.bmaster.kro.kr/contacts_long/search/';

export default {
  data() {
    return {
      x: 10, 
      y: 20,
      total: 0,
      name: '',
      isLoading: false,
      contactList: []
    }
  },
  methods: {
    getTotal() {
      this.total = Number(this.x) + Number(this.y);
    },
    getContactList() {
      this.isLoading = true;
      fetch(baseURL + this.name)
        .then(resp => resp.json())
        .then(data => {
          this.isLoading = false;
          // console.log(data)
          this.contactList = data;
        })
        .catch(err => console.error(err))
    }
  },
  watch: {
    x(newVal, oldVal) {
      console.log(newVal, oldVal);
      let total = Number(newVal) + Number(this.y);
      if (isNaN(total)) total = 0;
      this.total = total;
    },
    y(newVal, oldVal) {
      this.getTotal()
    },
    name(value) {
      if (value.length >= 2) this.getContactList();
    }
  }
}
</script>
