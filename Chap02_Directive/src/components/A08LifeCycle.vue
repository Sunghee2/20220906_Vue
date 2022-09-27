<template>
  <h3>A08 LifeCycle</h3>
  <br>
  Num: {{num}}<br>
  <button v-on:click="increase()">+1</button>
  <button v-on:click="decrease()">-1</button>
  <br>  
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      str: 'NolBu'
    }
  },
  methods: {
    increase: function () {
      this.num += 1;
    },
    decrease: function () {
      this.num -= 1;
    },
  },
  // data, event 초기화 전
  beforeCreate: function () {
    console.log('beforeCreate')
  },
  // data, event 초기화 완료
  created: function () {
    console.log('created')
  },
  // DOM 생성 전
  beforeMount: function () {
    console.log('beforeMount')
  },
  // DOM 생성 완료 후 mount
  mounted: function () {
    console.log('mounted');
    // ajax 요청.... => DOM에 반영
  },
  // state 변경 전
  beforeUpdate: function () {
    console.log('beforeUpdate')
  },
  // state 변경 후
  updated: function () {
    console.log('updated')
  },
  beforeUnmount: function () {      // beforeDestory
    console.log('beforeUnmount')
  },
  unmounted: function () {
    console.log('unmounted')        // destoryed
  },

  // Data 추적 Hook도 존재한다.
  // mounted 전에 최초 1번만 실행된다.
  renderTracked(evt) {
    const { key, target, type } = evt;
    console.log(key);
    console.log(target);
    console.log(type);
  },
  // 값이 변경될때마다 실행된다.
  renderTriggered(evt) {
    const { key, target, type } = evt;
    console.log(key);
    console.log(target);
    console.log(type);
  }
}
</script>
