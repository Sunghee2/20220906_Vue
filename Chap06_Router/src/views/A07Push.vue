<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back">BACK</button>
      <button   @click="forward">FORWARD</button>
      <button   @click="goHome">HOME</button>
      <button   @click="goURL('/A02Attr')">A02Attr</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button   @click="goURL({name: 'attr'})">A02Attr</button>
      <button   @click="goURL({name: 'params', params: {no: 1002, name: 'ABC'}})">Params</button>
      <button   @click="goURL({name: 'query', query: {no: 1003, name: 'DEF', address: 'Seoul'}})">Query</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back: function(){
      this.$router.back();
    },
    forward: function() {
      this.$router.forward();
    },
    goHome: function() {
      this.$router.push('/');
    },
    goURL: function(url) {
      this.$router.push(url);
    },
  },
  created() {
    console.log(this.$route);   // prams, query, fullpath...
    console.log(this.$router)   // method(link)
  },
  beforeRouteEnter(/*to, from*/) {
    console.log("component 수준의 네이게이션 보호 => IN");
    const storage = window.sessionStorage;
      if (storage.getItem("age")) return true;
      else return false;
  },
  // false면 이 view에서 다른 view로 이동이 안됨
  beforeRouteLeave(/*to, from*/) {
    console.log("component 수준의 네이게이션 보호 => OUT");
    const storage = window.sessionStorage;
      if (storage.getItem("age")) return true;
      else return false;
  },
  beforeRouteUpdate(/*to, from*/) {
    console.log("component 수준의 네이게이션 보호 => Update");
    const storage = window.sessionStorage;
      if (storage.getItem("age")) return true;
      else return false;
  },
}
</script>