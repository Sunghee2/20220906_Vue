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
  }
}
</script>