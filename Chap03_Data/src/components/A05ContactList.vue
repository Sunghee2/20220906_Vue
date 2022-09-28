<template>
  <h3>A05 ContactList</h3>

  <A05ContactForm   @searchEvent="getContactList"></A05ContactForm>
  <A05ContactList   :contactList="contactList"></A05ContactList>
</template>

<script>
const baseURL = 'http://sample.bmaster.kro.kr/contacts_long/search/'

import A05ContactForm from './childcomps/A05ContactForm.vue';
import A05ContactList from './childcomps/A05ContactList.vue';

export default {
  components: { A05ContactForm, A05ContactList },
  data() {
    return {
      contactList: []
    }
  },
  methods: {
    getContactList(evt) {
      fetch(baseURL + evt)
        .then(resp => resp.json())
        .then(data => this.contactList = data)
        .catch(err => console.error(err))
    }
  },
  mounted() {
    // this.getContactList();
  }
}
</script>
