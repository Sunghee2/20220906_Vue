<template>
  <div class="container-fluid">
    <h3>Update Contact</h3>

    <div>
        Name: <input type="text" class="form-control" name="name"   
          :value="contact.name" @input="changeContact"/>
        Tel: <input type="text" class="form-control" name="tel"     
          :value="contact.tel" @input="changeContact"/>
        Address: <input type="text" class="form-control" name="address" 
          :value="contact.address" @input="changeContact"/>
    </div>
    <br />
    <button class="btn btn-outline-primary" @click="updateContact">UPDATE</button>
  </div>
</template>
<script>
export default {
  computed: {
    contact() {
      return this.$store.state.contactR.contact;
    }
  },
  methods: {
    changeContact(evt) {
      this.$store.commit('contactR/CONTACT_CHANGECONTACT', evt.target)
    },
    updateContact() {
      this.$store.dispatch('contactR/CONTACT_UPDATECONTACT', this.contact);
      this.$router.push('/GetContactList');
    }
  },
}
</script>