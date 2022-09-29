<template>
  <div>
    <h3>A01 Axios</h3>

    <div>
      <button @click="getContactList">Get ContactList</button>
      <button @click="getContactListAsync">Get ContactList Async</button>
      <button @click="getContact">Get Contact</button>
      <button @click="addContact">Add Contact</button>
      <button @click="updateContact">Update Contact</button>
      <button @click="deleteContact">Delete Contact</button>
    </div>

    <div>
      <textarea cols="100" rows="10" readonly :value="data"></textarea>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const baseURL = 'http://localhost:8000/contacts/'

export default {
  data: function() {
      return { data: {} }
  },
  methods: {
    // JSON.stringify(data): JavaScript Data => JSON Data
    // JSON.parse(data): JSON Data => JavaScript Data
    getContactList: function() {
      axios.get(baseURL, {params: {pageno: 1, pagesize: 10}})
        .then(resp => {
          console.log(resp.data);
          this.data = JSON.stringify(resp.data, '', 4);
        })
        .catch(err => console.error(err))
    },
    async getContactListAsync() {
      try {
        const resp = await axios.get(baseURL, { params: { pageno: 2, pagesize: 10 } });
        this.data = JSON.stringify(resp.data, '', 4);
      } catch (err) {
        console.error(err)
      }
    },
    getContact: function() {
      axios({
        method: 'get',
        url: baseURL + 100,
        // headers: {'Content-Type': 'application/json'}    // Header Setting
        // data: ,                                          // Server에 전달할 값
      })
        .then(resp => this.data = JSON.stringify(resp.data, '', 4))
        .catch(err => console.error(err));

    },
    addContact: function () {
      const data = {
          "name":"강감찬",
          "tel":"010-2222-3339",
          "address":"서울시"
      }
      axios.post(baseURL, data, { headers: { 'Content-Type': 'application/json' } })
        .then(resp => this.data = JSON.stringify(resp.data, '', 4))
        .catch(err => console.error(err));
    },
    updateContact: function() {
      const data = {
          "name":"이순신",
          "tel":"010-1111-3339",
          "address":"서울시"
      }
      axios.put(baseURL + 1664426231061, data, { headers: { 'Content-Type': 'application/json' } })
        .then(resp => this.data = JSON.stringify(resp.data, '', 4))
        .catch(err => console.error(err));
    },
    deleteContact: function() {
      axios.delete(baseURL + 1664426231061)
        .then(resp => this.data = JSON.stringify(resp.data, '', 4))
        .catch(err => console.error(err));
    },
  }
}
</script>