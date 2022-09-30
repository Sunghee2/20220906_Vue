<template>
  <div>
    <h3>{{title}}</h3>

    <div>
      Num: {{num}}<br>
      <button   @click="incr">+</button>
      <button   @click="decr">-</button>
    </div>

    <div>
      Item Counter: {{itemCnt}}<br>
      Item 1001: {{item.no}} / {{item.name}}
    </div>
</div>
</template>

<script>
export default {
  computed: {
    num() {
      return this.$store.state.num;
    },
    title() {
      return this.$store.state.title;
    },
    itemCnt() {
      return this.$store.getters.itemCounter
    },
    item() {
      return this.$store.getters.getItem(1001);
    }
  },
  methods: {
    incr() {
      // store mutations => commit('methodName')
      // store action => dispatch('methodName')
      this.$store.commit('increase', 2);      // 2가 mutations의 해당함수의 payload 
    },
    decr() {
      this.$store.commit('decrease')
    }
  }
}
</script>