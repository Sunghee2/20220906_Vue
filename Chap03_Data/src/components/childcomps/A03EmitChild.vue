<template>
  <h5>A03 Emits Child Component</h5>  

  <div>
    <button   @click="sendNum">Num</button>
    <button   @click="sendObject">Data</button>
  </div>

</template>

<script>
export default {
  // emits: ['numEvent', 'nameEvent', 'objEvent'],
  emits: {
    numEvent: data => (typeof data === 'number') ? true : false,
    nameEvent: data => data.length >= 2 ? true : false,
    objEvent: data => data.target && data.target.user,
  },
  data() {
    return {
      num: 10,
      name: 'NolBu',
      arr: [10, 20],
      user: {name: 'HungBu', age: 20}
    }
  },
  methods: {
    sendNum() {
      // this.$emit('이벤트명', 이벤트객체에 전달할 값);
      this.$emit('numEvent', this.num);
    },
    sendObject() {
      const target = {
        nickname: 'NolBu',
        name: this.name,
        user: this.user
      }
      this.$emit('objEvent', target);
    }
  },
  created() {
    this.$emit('nameEvent', this.name);
  }
}
</script>
