<template>
  <div class="m-3">
    <h1>Chap02 Directive</h1>
  
    <div>
      Vue 2.X에서는 template 아래에 단일 요소만 지원한다.<br>
      Vue 3.X에서는 다중 요소 지원<br>
    </div>
    <br>

    <A03Attribute></A03Attribute><br>
    <A02Binding></A02Binding><br>
    <A01Comp />
  </div>
</template>

<script>
import A01Comp from './components/A01Component.vue';
import A02Binding from './components/A02Binding.vue';
import A03Attribute from './components/A03Attribute.vue';

export default {
  components: {A01Comp, A02Binding, A03Attribute}
}
</script>

<style>

</style>
