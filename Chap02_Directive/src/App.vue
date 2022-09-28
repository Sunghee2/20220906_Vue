<template>
  <div class="m-3 app">
    <h1>Chap02 Directive</h1>
  
    <div>
      Vue 2.X에서는 template 아래에 단일 요소만 지원한다.<br>
      Vue 3.X에서는 다중 요소 지원<br>
    </div>
    <br>

    <A15Currency></A15Currency><br>
    <A14ClassModule></A14ClassModule><br>
    <A13StyleClass></A13StyleClass><br>
    <A12ArrayObject></A12ArrayObject><br>
    <A11Refs></A11Refs><br>
    <A10Form></A10Form><br>
    <A09Event></A09Event><br>
    <A08LifeCycle></A08LifeCycle><br>
    <A07Watch></A07Watch><br>
    <A06Computed></A06Computed><br>
    <A05Method></A05Method><br>
    <A04MakeDOM></A04MakeDOM><br>
    <A03Attribute></A03Attribute><br>
    <A02Binding></A02Binding><br>
    <A01Comp />
  </div>
</template>

<script>
import A01Comp from './components/A01Component.vue';
import A02Binding from './components/A02Binding.vue';
import A03Attribute from './components/A03Attribute.vue';
import A04MakeDOM from './components/A04MakeDOM.vue';
import A05Method from './components/A05Method.vue';
import A06Computed from './components/A06Computed.vue';
import A07Watch from './components/A07Watch.vue';
import A08LifeCycle from './components/A08LifeCycle.vue';
import A09Event from './components/A09Event.vue';
import A10Form from './components/A10Form.vue';
import A11Refs from './components/A11Refs.vue';
import A12ArrayObject from './components/A12ArrayObject.vue';
import A13StyleClass from './components/A13StyleClass.vue';
import A14ClassModule from './components/A14ClassModule.vue';
import A15Currency from './components/A15Currency.vue';

export default {
  components: {
    A01Comp, A02Binding, A03Attribute, A04MakeDOM, A05Method,
    A06Computed, A07Watch, A08LifeCycle, A09Event, A10Form, 
    A11Refs, A12ArrayObject, A13StyleClass, A14ClassModule, A15Currency
  }
}
</script>

<style>
  /* HTML에서 CSS 기술 방식과 동일하게 정의한다. */
  /* @import url('path...'); */
  .app { color: 'lightgray'}
</style>
