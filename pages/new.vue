<template>
  <div class="">
    <nuxt-link to="/new">NEWS</nuxt-link>
    <nuxt-link to="/">HOME</nuxt-link>
    <h1>NEW</h1>
    <Items></Items>
  </div>
</template>

<script>
import Items from '~/components/Items.vue';
export default {
  components: {
    Items
  },
  async fetch({ store }) {
    store.dispatch('LOAD_ITEMS', 'posts');
  }
};
</script>
