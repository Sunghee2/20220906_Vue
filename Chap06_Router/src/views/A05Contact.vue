<template>
  <div>
    <h3>A05 Contacts</h3>

    <div>
      <template v-for="item in contacts" :key="item.no">
        <router-link :to="'/A05ContactChild/' + item.no">{{item.name}}</router-link> | 
      </template>
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
    };
  },
};
</script>
