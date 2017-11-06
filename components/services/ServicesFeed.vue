<style lang="scss">

  #services__feed {
    background: #222;
    height: 100%;
    width: 100%;
    padding-top: 4em;
    .service--grid {
      display: flex;
      flex-flow: column;
      align-items: stretch;
      justify-content: center;
      .service--item {
        color: white;
        font-size: 1.2em;
        letter-spacing: 1px;
        border: 1px solid white;
      }
    }
  }

///wp-json/acf/v2/options/slides

</style>

<template>
  <div id="services__feed">
    <div class="service--grid">
      <ServiceBlock class="service--item" :serviceData="service" v-for="service in services" :key="service.id" />
    </div>
  </div>
</template>

<script>
import ServiceBlock from "~/components/services/blocks/ServiceBlock";
import { mapState } from "vuex";

export default {
	computed: mapState(["services"]),
	components: {
		ServiceBlock
	},
	methods: {
		filterItems(query) {
			return fruits.filter(function(el) {
				return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
			});
		}
	}
};
</script>
