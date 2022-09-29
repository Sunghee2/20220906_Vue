<template>
  <div>
    <h3>A04 Props</h3>

    <div>
        Name: {{name}}<br>
        No: {{no}}<br>
        Person: {{person.no}} / {{person.name}}<br>
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  props: ['no', 'name'],
  data() {
    return {
      contacts: contactlist.contacts,
    }
  },
  computed: {
    person() {
      return this.contacts.find(item => item.no === Number(this.no))
    }
  }
}
</script>
