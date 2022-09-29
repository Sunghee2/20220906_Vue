<template>
  <div class="m-3">
    <h1>Chap04 Component</h1>

    <A11WarnHandler></A11WarnHandler><br>
    <A10ErrorCaputurd></A10ErrorCaputurd><br> <!-- life cycle-->
    <A09VModel></A09VModel><br>
    <A08VModel></A08VModel><br>
    <A07VModel></A07VModel><br>
    <A06Suspense></A06Suspense>
    <A05Suspense></A05Suspense><br>
    <A04Teleport></A04Teleport><br>
    <A03Teleport></A03Teleport><br>
    <A02DynamicComp></A02DynamicComp><br>
    <A01DynamicComp></A01DynamicComp>
  </div>
</template>

<script>
import A01DynamicComp from './components/A01DynamicComp.vue';
import A02DynamicComp from './components/A02DynamicComp.vue';
import A03Teleport from './components/A03Teleport.vue';
import A04Teleport from './components/A04Teleport.vue';
import A05Suspense from './components/A05Suspense.vue';
import A06Suspense from './components/A06Suspense.vue';
import A07VModel from './components/A07VModel.vue';
import A08VModel from './components/A08VModel.vue';
import A09VModel from './components/A09VModel.vue';
import A10ErrorCaputurd from './components/A10ErrorCaputurd.vue';
import A11WarnHandler from './components/A11WarnHandler.vue';

export default {
  name: 'App',
  components: {
    A01DynamicComp, A02DynamicComp, A03Teleport, A04Teleport, A05Suspense,
    A06Suspense, A07VModel, A08VModel, A09VModel, A10ErrorCaputurd, A11WarnHandler
  },
  errorCaptured(err, vm, info) {
    console.log(' ----------------- App ------------------')
    console.log(err);
    console.log(vm);        // Error가 발생한 컴퍼넌트
    console.log(info);      // vue 자체 안내 문구

    vm.isError = false;

    // return false;
  }
}
</script>

<style>
</style>
