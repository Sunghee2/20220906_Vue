<template>
  <div class="m-3">
    <h1>Chap04 Component</h1>

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
import A06Suspense from './components/A06Suspense.vue'

export default {
  name: 'App',
  components: {
    A01DynamicComp, A02DynamicComp, A03Teleport, A04Teleport, A05Suspense,
    A06Suspense, 
  }
}
</script>

<style>
</style>
