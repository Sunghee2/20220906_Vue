<template>
  <h3>A14 Class Module</h3>

  전역에서 사용할 수 있는 CSS로 등록되지만 이름이 중복되지는 않는다<br>
  <div :class="$style.one">{{hello}}</div>
  <div :class="[$style.one, $style.two]">{{hello}}</div>
  <br>

  <div :class="{[$style.one]: isChecked, [$styleTwo]: isChecked}">{{hello}}</div>
  <div :class="{[classOne]: isChecked}">{{hello}}</div>
  <input type="checkbox"  v-model="isChecked"> Check<br />
  <br>
</template>

<script>
export default {
  data() {
    return {
      hello: 'Hello World!!',
      isChecked: true,
      num: 0,
    }
  },
  computed: {
    classOne() {
      return this.$style.one + ' ' + this.$style.two;
    },
  },
  mounted(){
    console.log(this);
    console.log(this.$style)
  }
}
</script>

<style module>
    .one { color: orange; }
    .two { font-size: 24pt; }
    .three { font-weight: bold; }
</style>

<!-- 
  scss, sass 파일 사용
  1. node-sass 모듈을 설치
    npm i sass-loader
  2. vscode 재 시작
-->
<style lang="scss">
  
</style>
