<template>
  <table class="table">
    <thead>
      <tr>
        <th>번호</th><th>이름</th><th>전화번호</th><th>주소</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="contact in contactList" :key="contact.no">
        <tr>
          <td>{{contact.no}}</td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['contactList']
}
</script>
