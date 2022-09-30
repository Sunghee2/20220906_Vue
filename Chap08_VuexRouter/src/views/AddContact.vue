<template>
    <div class="container-fluid">
        <h3>Add Contact</h3>

        Name: <input type="text" class="form-control" name="name"
            v-model="contact.name" />
        Tel: <input type="text" class="form-control" name="tel"
            v-model="contact.tel" />
        Address: <input type="text" class="form-control" name="address"
            v-model="contact.address" />
        <br />
        <button class="btn btn-outline-primary" @click="addContact">ADD</button>
    </div>
</template>
<script>
export default {
    computed: {
      contact() {
        // return this.$store.state.contactR.contact;
        return { no: "", name: "", tel: "", address: "" }
      }
    },
    methods: {
      addContact() {
        this.$store.dispatch('contactR/CONTACT_ADDCONTACT', this.contact);
        this.$router.push('/GetContactList');
      }
    },
    mounted() {
        // getter라 여기서 직접 변경할 수 없음
        // this.contact = { no: "", name: "", tel: "", address: "" };
    }
}
</script>
