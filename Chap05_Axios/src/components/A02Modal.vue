<template>
  <div>
    <table class="table">
      <thead>
        <tr><th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th></tr>
      </thead>
      <tbody>
        <template v-for="contact in contactList.contacts" :key="contact.no">
          <tr>
            <td>{{contact.no}}</td>
            <td><a href="#" @click="getContact(contact.no)">{{contact.name}}</a></td>
            <td>{{contact.tel}}</td>
            <td>{{contact.address}}</td>
            <td><img v-bind:src="contact.photo" width="50" /></td>
          </tr>
        </template>
      </tbody>
    </table>
    <button class="btn btn-primary"   @click="viewAdd">ADD</button>

    <!-- Get Contact Modal -->
    <div class="modal fade" id="getContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Get Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control" disabled    :value="contact.name"/>
              Tel: <input type="text" class="form-control" disabled     :value="contact.tel"/>
              Address: <input type="text" class="form-control" disabled :value="contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"   @click="deleteContact(contact.no)">Delete</button>
            <button type="button" class="btn btn-primary"   @click="viewUpdate">Update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Update Contact Modal -->
    <div class="modal fade" id="updateContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Update Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control"   v-model.trim="contact.name" />
              Tel: <input type="text" class="form-control"    v-model.trim="contact.tel"/>
              Address: <input type="text" class="form-control"  v-model.trim="contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"   @click="updateContact">Update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Contact Modal -->
    <div class="modal fade" id="addContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control"   v-model.trim="contact.name" />
            Tel: <input type="text" class="form-control"    v-model.trim="contact.tel"/>
            Address: <input type="text" class="form-control"  v-model.trim="contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addContact">ADD</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm.js'
import axios from 'axios';

const baseURL = 'http://localhost:8000/contacts/';

export default {
  data() {
    return {
      getContentModal: '',
      updateContentModal: '',
      addContentModal: '',
      contactList: {pageno: '', pagesize: '', totalcount: '', contacts: []},
      contact: {no: '', name: '', tel: '', address: '', photo: ''},
    }
  },
  methods: {
    viewUpdate() {
      this.getContentModal.hide()
      this.updateContentModal.show();
    },
    viewAdd() {
      this.contact = { no: '', name: '', tel: '', address: '', photo: '' };
      this.addContentModal.show();
    },
    async getContactList(no = 1, size = 10) {
      try {
        const resp = await axios.get(baseURL, { params: { pageno: no, pagesize: size } });
        // this.contactList = JSON.parse(resp.data);    // JSON 데이터로 넘어오는 경우
        this.contactList = resp.data;
      } catch (err) {
        console.error(err);
      }
    },
    // getContact(no) {
    //   axios.get(baseURL + no)
    //     .then(resp => this.contact = resp.data)
    //     .catch(err => console.error(err));
    // }
    async getContact(no) {
      try {
        const resp = await axios.get(baseURL + no);
        this.contact = resp.data;
        this.getContentModal.show()
      } catch (err) {
        console.error(err);
      }
    },
    async deleteContact(no) {
      try {
        // 받은 데이터를 사용할 곳이 없음. => 처리만 함
        await axios.delete(baseURL + no);
        this.getContactList();    // 변경된 데이터 다시 요청
        this.getContentModal.hide();
      } catch (err) {
        console.error(err);
      }
    },
    async updateContact() {
      try {
        // 받은 데이터를 사용할 곳이 없음. => 처리만 함
        await axios.put(baseURL + this.contact.no, this.contact);
        this.getContactList();    // 변경된 데이터 다시 요청
        this.updateContentModal.hide();
      } catch (err) {
        console.error(err);
      }
    },
    async addContact() {
      try {
        // 받은 데이터를 사용할 곳이 없음. => 처리만 함
        await axios.post(baseURL, this.contact, {headers: {'Content-Type': 'application/json'}});
        this.getContactList();    // 변경된 데이터 다시 요청
        this.addContentModal.hide();
      } catch (err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.getContactList();
    this.getContentModal = new bootstrap.Modal(document.getElementById('getContent'), {
      keyboard: false
    });
    this.updateContentModal = new bootstrap.Modal(document.getElementById('updateContent'), {
      keyboard: false
    });
    this.addContentModal = new bootstrap.Modal(document.getElementById('addContent'), {
      keyboard: false
    });
  }
}
</script>
