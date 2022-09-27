<template>
  <h3>A03 Attribute Directive</h3>

  <div >
    <h5>1. 속성 바인딩</h5>
    태그의 속성 값으로 data 또는 함수의 리턴 값으로 사용하고자 하는 경우는 "v-bind:속성명" 속성을 이용
    <input type="text" class="form-control" value="{{name}}">
    <input type="text" class="form-control" v-bind:value="name">
    <input type="text" v-bind:class="'form-control'" v-bind:value="name">

    <input type="text" :class="formCtrl" :value="name">

    <input v-bind="inputAttrs">
    
    <div :style="divStyle">Hello World</div>
    <button v-on:click="changeName">Name</button>
  </div>
  <br>

  <div >
    <h5>2. 양방향 바인딩</h5>
    View에서 할당된 값을 변경하면 VM의 값이 변경된다.<br> 
    <input type="text" class="form-control" v-model="name">
    <input type="text" class="form-control" v-model="name">
    <input type="text" class="form-control" v-bind:value="num" v-on:input="changeNumber">
    Name: {{name}} / Num: {{num + 100}}
  </div>
  <br>

  <div class="row">
    <div class="col-6">
      <select class="form-control"    v-model="direction">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="text" class="form-control"   v-model="size">
    </div>
  </div>
  <br>
  <img src="./../assets/images/tree.jpg" alt="Tree"   v-bind:[direction]="size">
</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu',
      num: 10,
      formCtrl: 'form-control',
      inputAttrs: { type: 'text', class: 'form-control', value: 'ABC' },  // 값으로 this 참조가 안됨.
      divStyle: { background: 'lightgray', padding: '10px' },
      direction: 'width',
      size: 100,
    }
  },
  methods: {
    changeName() {
      this.name = '흥부';
    },
    changeNumber(evt) {
      // console.log(evt.target)
      let value = Number(evt.target.value);
      if (isNaN(value)) value = 0;
      this.num = value;
    }
  }
}
</script>
