<template>
    <div class="container-fluid">
        <h3>Get Contact</h3>

        <div>
            Name: <input type="text" class="form-control" disabled      :value="contact.name"/>
            Tel: <input type="text" class="form-control" disabled       :value="contact.tel"/>
            Address: <input type="text" class="form-control" disabled   :value="contact.address"/>
        </div>
        <br />
        <button class="btn btn-outline-primary" @click="viewUpdate">수정</button>
        <button class="btn btn-outline-primary" @click="deleteContact(contact.no)">삭제</button>
    </div>
</template>

<script>
export default {
  props: ['no'],
  computed: {
    contact() {
      return this.$store.state.contactR.contact;
    }
  },
  methods: {
    getContact(no) {
      this.$store.dispatch('contactR/CONTACT_GETCONTACT', no);
    },
    viewUpdate() {
      this.$router.push('/UpdateContact');
    },
    deleteContact(no) {
      this.$store.dispatch('contactR/CONTACT_DELETECONTACT', no);
      this.$router.push('/GetContactList');
    }
  },
  mounted() {
    this.getContact(this.no)
  },
}
</script>