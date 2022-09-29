<template>
  <div>
    <h3>A08 Child Router</h3>

    <router-link to="/A08Child">INFO</router-link> | 
    <router-link to="/A08Child/way">WAY</router-link> | 

    <template v-for="item in contacts" :key="item.no">
      <router-link :to="'/A08Child/view/' + item.no">{{item.name}}</router-link> | 
    </template>

    <br />

    <!-- 자식 요소의 컴퍼넌트가 로드된다 -->
    <router-view></router-view>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
    };
  },
};
</script>

<style>
</style>