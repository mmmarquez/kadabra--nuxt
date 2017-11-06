<style lang="scss">

</style>


<template>
  <div>
    <FullScreenSlider />
    <WorksGrid />
    <ServicesFeed />
    <ClientsFeed />
  </div>
</template>

<script>
import Items from "~/components/Items.vue";
import FullScreenSlider from "~/components/sliders/FullScreenSlider.vue";
import WorksGrid from "~/components/works/WorksGrid.vue";
import ServicesFeed from "~/components/services/ServicesFeed.vue";
import ClientsFeed from "~/components/clients/ClientsFeed.vue";

export default {
	components: {
		FullScreenSlider,
		WorksGrid,
		ServicesFeed,
		ClientsFeed
	},
	async fetch({ store }) {
		await store.dispatch("LOAD_WORKS", "works/?per_page=100");
		await store.dispatch("LOAD_SLIDES", "slide/?per_page=100");
		await store.dispatch("LOAD_SERVICES", "service/?per_page=100");
		await store.dispatch("LOAD_CLIENTS", "client/?per_page=100");
	}
};
</script>
