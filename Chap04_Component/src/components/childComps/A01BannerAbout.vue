<template>
  <div class="banner">
    <h5>About Component</h5>
    <p>Vue is a framework and ecosystem that covers most of the common features needed in frontend development. 
      But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. 
      With that in mind, Vue is designed to be flexible and incrementally adoptable. 
      Depending on your use case, Vue can be used in different ways:<br>
      <br>

      Time: {{now.toLocaleString()}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: new Date()
    }
  },
  activated() {
    console.log('activated');
    this.now = new Date();
  },
  deactivated() {
    console.log('deactivated');
  }
}
</script>