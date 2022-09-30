<template>
  <div class="container-fluid">
    <table class="table">
      <thead>
        <tr>
          <th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="contact in contactList.contacts" :key="contact.no">
          <tr>
            <td>{{contact.no}}</td>
            <td><router-link :to="{name: 'contact', params: {no: contact.no}}">{{contact.name}}</router-link></td>
            <td>{{contact.tel}}</td>
            <td>{{contact.address}}</td>
            <td>
              <router-link :to="{name: 'photo', params: {no: contact.no}}">
                <img :src="contact.photo" width="50"/>
              </router-link>
              </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    contactList() {
      return this.$store.state.contactR.contactList;
    }
  },
  methods: {
    getContactList(no, size) {
      this.$store.dispatch('contactR/CONTACT_GETCONTACTLIST', {no, size})
    }
  },
  mounted() {
    // console.log(this.$store)
    this.getContactList(1, 10)
  },
}
</script>