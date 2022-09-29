<template>
  <div>
    <h3>A06 Query</h3>

    <div>
      Name: {{$route.query.name}}<br>
      No: {{no}}<br>
      Person: {{person.no}} / {{person.name}}<br>
      Hash: {{$route.hash}}
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
      return Number(this.$route.query.no)
    },
    person() {
      return this.contacts.find(item => item.no === Number(this.$route.query.no))
    }
  },
  created() {
    console.log(this.$route)
  }
}
</script>
