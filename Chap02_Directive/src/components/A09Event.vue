<template>
  <h3>A09 Event</h3>

  Num: {{num}}<br>
  <button   v-on:click="num++">+1</button>
  <button   v-on:click="decrease">-1</button>
  <button   v-on:click="decrease()">-1</button>       <!-- 함수가 받는 매개변수가 없음 -->
  <button   v-on:click.once="decrease">once</button>  <!-- once 수식자 -->
  
  <!-- shift, ctrl, alt, meta, right, middle, left -->
  <button   @click.shift="decrease">Key</button>

  <button   @click="increase">Event 01</button>     <!-- event 객체를 묵시적으로 전달 -->
  <button   @click="increase($event)">Event 02</button>
  <button   @click="increaseEvt($event, 3)">Event 03</button>
  <br>
  <br>
  
  <div id="container"   @click="outer">
  <div id="inner"       @click="innerOne">ONE</div>
  <div id="inner"       @click.stop="innerTwo">TWO</div> <!-- .stop => evt.stopPropagation(); -->
  </div>
  <br>
  <br>

  <div>
      <a href="http://www.daum.net"   @click="daum">DAUM</a> |
      <a href="http://www.naver.com"  @click.prevent="naver">NAVER</a> |
  </div>
  <br>

  <input type="text" class="form-control"><br>
  esc: <input type="text" class="form-control"    v-model="name"/><br>
  Enter: <input type="text" class="form-control"  v-model="msg"/><br>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      name: 'Guest',
      msg: ''
    }
  },
  methods: {
    decrease: function() {
      this.num--;
    },
    increase(evt) {
      evt.target.style.color = 'green';
      this.num += 2;
    },
    increaseEvt(evt, num) {
      evt.target.style.background = 'orange';
      this.num += num;
    },
    outer(evt) {
      console.log(evt.target, evt.currentTarget);
    },
    innerOne(evt) {
      evt.stopPropagation();    // bubbling 단계 이벤트 모두 취소
      console.log(evt.target, evt.currentTarget);
    },
    innerTwo(evt) {
      console.log(evt.target, evt.currentTarget);
    },
    daum(evt) {
      evt.preventDefault();          // 태그가 가진 내장 자바스크립트 기능을 취소 
      console.log('Daum으로 이동');
    },
    naver(evt) {
      console.log('Naver으로 이동');
    }
  }
}
</script>

<style scoped>
  #container { width: 300px; height: 150px; border: 1px solid gray; display: flex; justify-content: center; align-items: center;}
  #inner { width: 100px; height: 100px; background: orange; padding: 10px; margin: 10px; text-align: center; display: flex; justify-content: center; align-items: center;}
</style>
