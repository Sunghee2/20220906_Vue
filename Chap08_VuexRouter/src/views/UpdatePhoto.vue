<template>
  <div class="card" style="width: 50rem;">
    
    <div class="card-body">
      <h3 class="heading">사진 변경</h3>
      <p class="card-text">변경 할 사진을 선택해 주세요</p>

      <form method="post" enctype="multipart/form-data">
        <div>
          현재 사진:<br>
          <img class="thumb" width="100" :src="contact.photo"/>
        </div>
        <br>

        <div>
          사진 파일 선택: <br>
          <input type="file" name="photo" class="form-control" ref="photofile">
        </div>
        <div>
          <div>&nbsp;</div>
          <input type="button" class="btn btn-danger" value="변 경" @click="updatePhoto">
          <input type="button" class="btn btn-primary" value="취 소" @click="cancelEvent">
        </div>
      </form>
    </div>
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
    updatePhoto() {
      const file = this.$refs.photofile.files[0];
      this.$store.dispatch('contactR/CONTACT_UPDATEPHOTO', { no: this.no, file });
      this.$router.push('/GetContactList');
    },
    cancelEvent() {
      this.$router.push('/GetContactList');
    }
  },
  mounted() {
    this.getContact(this.no)
  },
}
</script>