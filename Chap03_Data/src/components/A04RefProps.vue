<template>
  <h3>{{title}}</h3>  

  <div>
    <button @click="callChildMethod">Call Child Method</button>
    <button @click="callChildEvent">Call Child Event</button>
  </div>
  <br>

  <A04RefPropChild ref="childRef"></A04RefPropChild>
</template>

<script>
import A04RefPropChild from './childcomps/A04RefPropChild.vue';
export default {
  components: {A04RefPropChild},
  data() {
    return {
      title: 'A04 RefProps'
    }
  },
  methods: {
    callChildMethod() {
      this.$refs.childRef.name = '흥부';
      this.$refs.childRef.changeAge();
      this.$refs.childRef.$refs.nameRef.style.background = 'orange'
    },
    callChildEvent() {
      this.$refs.childRef.$refs.btnRef.click()
    }
  }
}
</script>
