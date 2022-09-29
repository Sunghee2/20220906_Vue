<template>
  <h3>A06 Suspense - Vue3</h3>

  <!-- <suspense>
    <template #default>
      <A01BannerAbout></A01BannerAbout>
    </template>
    <template #fallback>
      Loading
    </template>
  </suspense> -->

  <A01BannerAbout></A01BannerAbout>

</template>

<script>
import { defineAsyncComponent } from 'vue';

import ErrorComp from './childComps/ErrorComp.vue';
import LoadComp from './childComps/LoadComp.vue'

const A01BannerAbout = defineAsyncComponent({
  loader() {
    return new Promise((resolve, reject) => {
      setTimeout(flag => {
        if (!flag) reject('load error...');
        // 이 컴퍼넌트를 불러올때 시간이 걸린다고 가정
        else (resolve(import('./childComps/A01BannerAbout.vue')))
      }, 3000, true);
    })
  },
  errorComponent: ErrorComp,
  loadingComponent: LoadComp,
  delay: 500,                   // loadingComp가 표시되기 시작하는 시간 delay
  timeout: 5000,                // 5000 이내에 로드되지 않으면 에러 
  suspensible: false,           // 지금 작성하는 내부의 구현 로직을 따를 것인가 아니면 VM에 기술한 방식을 따를 것인가
  onError(err, retry, fall, attempts) {
    if (err && attempts <= 3) {
      console.log(attempts);
      retry();
    } else {
      fall();
    }
  }
})
export default {
  components: { A01BannerAbout },
}
</script>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }
</style>
