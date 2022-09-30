const CONTACT_GETCONTACTLIST = "CONTACT_GETCONTACTLIST";
const CONTACT_GETCONTACT = "CONTACT_GETCONTACT";
const CONTACT_ADDCONTACT = "CONTACT_ADDCONTACT";
const CONTACT_DELETECONTACT = "CONTACT_DELETECONTACT";
const CONTACT_UPDATECONTACT = "CONTACT_UPDATECONTACT";
const CONTACT_CHANGECONTACT = "CONTACT_CHANGECONTACT";
const CONTACT_UPDATEPHOTO = "CONTACT_UPDATEPHOTO";

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
      // state를 변경할 것이 없음
      console.log(state, payload);
    },
    [CONTACT_UPDATECONTACT]: (state, payload) => {
      // state를 변경할 것이 없음
      console.log(state, payload);
    },
    // payload => evt.target (name, value)
    [CONTACT_CHANGECONTACT]: (state, payload) => {
      state.contact[payload.name] = payload.value;
    },

    // updatephoto가 state 처리 작업이 없으면 없어도 됨
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
    [CONTACT_DELETECONTACT]: (action, value) => {
      api
        .deleteContact(value)
        .then((resp) => action.commit(CONTACT_DELETECONTACT, resp.data))
        .catch((err) => console.error(err));
    },
    // value => {no: ?, name: ?, ....}
    [CONTACT_UPDATECONTACT]: (action, value) => {
      api
        .updateContact(value)
        .then((resp) => action.commit(CONTACT_UPDATECONTACT, resp.data))
        .catch((err) => console.error(err));
    },
    // value => {no: ?, name: ?, ....}
    [CONTACT_ADDCONTACT]: (action, value) => {
      api
        .addContact(value)
        .then((resp) => action.commit(CONTACT_ADDCONTACT, resp.data))
        .catch((err) => console.error(err));
    },
    // value => {no: ?, file: ?}
    [CONTACT_UPDATEPHOTO]: (action, value) => {
      api
        .updatePhoto(value.no, value.file)
        .then((resp) => console.log(resp.data))
        .catch((err) => console.error(err));
    },
  },
};
