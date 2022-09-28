<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" v-model="search"  ref="searchRef"/>
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="searchEvent">Submit</button>
      </div>
    </div>  
  </form>
</template>

<script>
export default {
  emits: ['searchEvent'],
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchEvent() {
      if (this.search.trim().length >= 2) {
        this.$emit('searchEvent', this.search);
        this.search = '';
        this.$refs.searchRef.focus();
      }
    }
  }
}
</script>
