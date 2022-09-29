<template>
  <h3>A05 Suspense - Vue3</h3>

  <suspense>
    <template #default>
      <A01BannerAbout></A01BannerAbout>
    </template>
    <template #fallback>
      <div>Loading....</div>
    </template>
  </suspense>
</template>

<script>
// import A01BannerAbout from './childComps/A01BannerAbout.vue';
import { defineAsyncComponent } from 'vue';
const A01BannerAbout = defineAsyncComponent(async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));    // 잠시 대기 목적으로 구현
  return import('./childComps/A01BannerAbout.vue');
});

export default {
  components: {A01BannerAbout},
  
}
</script>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }
</style>
