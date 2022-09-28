<template>
  <h3>A03 Emits</h3>  

  <div>
    Counter: {{num}}<br>
    Name: {{name}}<br>
    NickName: {{nickname}}
    <br>
    Object: <br>
    Name: {{target && target.name}}<br>
    User: {{target.user && target.user.name}} / {{target.user && target.user.age}}
  </div>

  <hr>
  
  <A03EmitChild 
    @numEvent="getNum" 
    @nameEvent="getName"
    @objEvent="getObject"></A03EmitChild>
</template>

<script>
import A03EmitChild from './childcomps/A03EmitChild.vue';

export default {
  components: {A03EmitChild},
  data() {
    return {
      name: '',
      num: '',
      nickname: '',
      target: ''
    }
  },
  methods: {
    getNum(evt) {
      // console.log(evt)
      this.num = evt;
    },
    getName(evt) {
      // console.log(evt)
      this.name = evt;
    },
    getObject(evt) {
      this.nickname = evt.nickname;
      this.target = evt;
    }
  }
}
</script>
