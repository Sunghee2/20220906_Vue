<template>
  <div class="m-3">
    <h1>Chap09 Composition API</h1>

    <A08LifeCycle></A08LifeCycle><br>
    <A07Computed></A07Computed><br>
    <A06Provide></A06Provide><br>
    <A05Emits></A05Emits><br>
    <A04Props name="NolBu" :age="30" :address="address" :arr="arr" :user="user"
      :isChecked="isChecked" :onAdd="onAdd"></A04Props><br>
    <A03ToRefs></A03ToRefs><br>
    <A02Reactive></A02Reactive><br>
    <A01Ref></A01Ref>
  </div>
</template>

<script>
import A01Ref from './components/A01Ref.vue';
import A02Reactive from './components/A02Reactive.vue';
import A03ToRefs from './components/A03ToRefs.vue';
import A04Props from './components/A04Props.vue';
import A05Emits from './components/A05Emits.vue';
import A06Provide from './components/A06Provide.vue';
import A07Computed from './components/A07Computed.vue';
import A08LifeCycle from './components/A08LifeCycle.vue';

export default {
  name: 'App',
  components: {
    A01Ref, A02Reactive, A03ToRefs, A04Props, A05Emits,
    A06Provide, A07Computed, A08LifeCycle
  },
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      isChecked: true,
      user: { name: 'HungBu', age: 30 },
    }
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`
    }
  }
}
</script>
