<template>
  <div>
    <h3>A06 Query</h3>

    <div>
      Name: <br>
      No: <br>
      Person: <br>
      Hash: 
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
    
  }
}
</script>
