<style lang="scss">

  #client_greed {
    background: #222;
    height: 100%;
    width: 100%;
    padding-top: 4em;
    .client--grid {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      .client--item {
        color: white;
        font-size: 1.2em;
        letter-spacing: 1px;
        padding: 1em;
        border: 1px solid white;
      }
    }
  }

///wp-json/acf/v2/options/slides

</style>

<template>
  <div id="clients__grid">
    <ul class="client--grid">
      <li class="client--item" v-for="client in clients" :key="client.id">
        {{client.client}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: mapState(["clients"])
};
</script>
