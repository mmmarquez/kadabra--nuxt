<template>
    <div class="code">
      <h1>work</h1>
      <ul class="list pa2">
        <li v-for="item in items" :key="item.id">
          {{item.title.rendered}}
        </li>
      </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState(['items'])
};
</script>
