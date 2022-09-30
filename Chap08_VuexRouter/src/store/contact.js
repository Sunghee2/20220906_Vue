const CONTACT_GETCONTACTLIST = "CONTACT_GETCONTACTLIST";
const CONTACT_GETCONTACT = "CONTACT_GETCONTACT";
const CONTACT_ADDCONTACT = "CONTACT_ADDCONTACT";
const CONTACT_DELETECONTACT = "CONTACT_DELETECONTACT";
const CONTACT_UPDATECONTACT = "CONTACT_UPDATECONTACT";

import * as api from "./../api/contact";

export default {
  namespaced: true,
  state: {
    contactList: { pageno: 1, pagesize: 5, totalcount: 0, contacts: [] },
    contact: { no: "", name: "", tel: "", address: "" },
  },
  mutations: {
    [CONTACT_GETCONTACTLIST]: (state, payload) => {
      // console.log(state, payload);
      state.contactList = payload;
    },
    [CONTACT_GETCONTACT]: (state, payload) => {
      // console.log(state, payload);
      state.contact = payload;
    },
    [CONTACT_ADDCONTACT]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_DELETECONTACT]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_UPDATECONTACT]: (state, payload) => {
      console.log(state, payload);
    },
  },
  actions: {
    // value => {no: 1, size: 10}
    [CONTACT_GETCONTACTLIST]: (action, value) => {
      api
        .getContactList(value.no, value.size)
        .then((resp) => action.commit(CONTACT_GETCONTACTLIST, resp.data))
        .catch((err) => console.error(err));
    },
    // value => no
    [CONTACT_GETCONTACT]: (action, value) => {
      api
        .getContact(value)
        .then((resp) => action.commit(CONTACT_GETCONTACT, resp.data))
        .catch((err) => console.error(err));
    },
  },
};
