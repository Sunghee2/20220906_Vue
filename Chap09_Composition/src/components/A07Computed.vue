<template>
  <h3>A07 Computed</h3>
    
  <div>
    Num: {{num}} / {{numComp}}<br />
    <button @click="increase">NUM+</button><br>
    <br>
  </div>

  <input type="text" class="form-control" v-model="search"><br>
  <table class="table">
    <thead>
      <tr><th>NO</th><th>NAME</th><th>TEL</th><th>ADDRESS</th></tr>
    </thead>
    <tbody>
      <tr v-for="contact in contactList" :key="contact.no">
        <td>{{contact.no}}</td>
        <td>{{contact.name}}</td>
        <td>{{contact.tel}}</td>
        <td>{{contact.address}}</td>
      </tr>
    </tbody>
  </table>

  <div v-show="isLoading">Loading....</div>
  <button @click="stop">STOP WATCH</button>
</template>

<script setup>
  import { ref, computed, /*watch*/ watchEffect } from 'vue';

  const num = ref(0);
  const isLoading = ref(false);
  const search = ref('');
  const contactList = ref([]);

  const getContactList = () => {
    isLoading.value = true;
    contactList.value = [];
    const url = 'http://sample.bmaster.kro.kr/contacts_long/search/' + search.value;
    fetch(url)
    .then( resp => resp.json())
    .then( data => {
      contactList.value = data;
      isLoading.value = false;
    })
    .catch( error => console.error(error) )
  }

const increase = () => num.value++;

// computed
const numComp = computed(
  () => {
    const result = num.value + 100;
    return result;
  },
  {
    onTrack(evt) {          // 최초 1번
      console.log(evt)
    },
    onTrigger(evt) {        // 값이 변경될때마다 실행
      console.log(evt)
    }
  }
)


// watch => old value, new value를 사용할 필요가 있는 경우.
// const stopWatch = watch(
//   () => search.value,           // 감시 대상
//   (newVal, /*oldVal*/) => {
//     if (newVal.length >= 2) getContactList();
//   }
// );

const stopWatchEffect = watchEffect(
  () => {
    if (search.value.length >= 2) getContactList();
  }
)

const stop = () => {
  // stopWatch();          // 감시 등록자를 삭제. removeWatch
  stopWatchEffect();
}

</script>
