<template>
  <h3>A02 Props</h3>


</template>

<script>
export default {
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      user: {name: 'HungBu', age: 30}
    }
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`
    }
  }
}
</script>
