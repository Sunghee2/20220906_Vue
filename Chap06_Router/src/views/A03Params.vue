<template>
  <div>
    <h3>A03 Params</h3>

    <div>
        Name: {{name}} <br>
        No: {{no}}<br>
        Person: {{person.no}} / {{person.name}}<br>
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data: function() {
    return {
        contacts: contactlist.contacts,
    }
  },
  computed: {
    no() {
      return Number(this.$route.params.no)
    },
    name() {
      return this.$route.params.name;
    },
    person() {
      return this.contacts.find(item => item.no === Number(this.$route.params.no));
    }
  }, 
  created: function(){
      console.log(this.$route)
  },
  mounted() {
    // no값 기반으로 axios 요청
  }
}
</script>
