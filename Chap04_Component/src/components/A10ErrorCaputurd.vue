<template>
  <h3>A10 Error</h3>
    
  <hr>

  <A10ErrorChild></A10ErrorChild>
</template>

<script>
import A10ErrorChild from './childComps/A10ErrorChild.vue'

export default {
  components: { A10ErrorChild },
  errorCaptured(err, vm, info) {
    console.log(' ----------------- Local ------------------')
    console.log(err);
    console.log(vm);        // Error가 발생한 컴퍼넌트
    console.log(info);      // vue 자체 안내 문구

    vm.isError = false;

    // 상위 컴퍼넌트에 이벤트 전파를 막는다.
    // 이 하위의 에러는 모두 여기서 처리. 상위 전파할 필요가 없는 경우
    return false;
  }
}
</script>
