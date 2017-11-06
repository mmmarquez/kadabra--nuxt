<style lang="scss">

@mixin aspect-ratio($width, $height) {
	position: relative;
	&:before {
		display: block;
		content: "";
		width: 100%;
		padding-top: ($height / $width) * 100%;
	}
	> .content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
}

  #works__grid {
    background: #222;
    height: 100%;
    width: 100%;
    padding-top: 4em;
    position: relative;
    overflow: hidden;
    .work--grid {
      position: relative;
      .work--item {
        height: auto;
        max-height: 100%;
        border: 1px solid white;
        width: 100%;
        overflow: hidden;
        position: absolute;
        min-width: 100%;
        min-height: 300px;
        &.tooltip {
          background: red;
        }
        .work--image {
          position: absolute;
          top: 50%;
          left: 50%;
          min-height: 100%;
          // transform: translate(-50%, -50%);
        }
        img {
          width: 100%;
          max-width: 100%;
          display: block;
        }
      }
    }
  }

///wp-json/acf/v2/options/slides

</style>

<template>
  <div id="works__grid">
    <no-ssr>
      <div v-masonry transition-duration="1s" fit-width="true" item-selector=".work--item" class="masonry-container work--grid">
        <div v-masonry-tile class="work--item" v-for="(work, index) in works" :key="index" @mouseleave="showTooltip(work, $event, index)">
          <img class="work--img" :src="work.work_image.url" alt="">
          <div class="work--meta">

          </div>
        </div>
      </div>
  </no-ssr>
    <!-- <ul class="work--grid">
      <li class="work--item" v-for="(work, index) in works" :key="index">
        {{work.work_title}}
      </li>
    </ul> -->

    <span class="couponcode">consectetur adipiscing
      <span class="coupontooltip">This is a tooltip</span>
    </span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</template>

<script>
import { mapState } from "vuex";
import NoSSR from "vue-no-ssr";
export default {
	computed: mapState(["works"]),
	mounted() {
		if (typeof this.$redrawVueMasonry === "function") {
			this.$redrawVueMasonry();
		}
		var tooltips = document.querySelectorAll(".work--item");
		for (var i = 0; i < tooltips.length; i++) {
			tooltips[i].addEventListener("mousemove", function fn(e) {
				console.log("ywah");
				var tooltip = e.target.classList.contains(".work--meta")
					? e.target
					: e.target.querySelector(":scope .work--meta");
				tooltip.style.left =
					e.pageX + tooltip.clientWidth + 10 < document.body.clientWidth
						? e.pageX + 10 + "px"
						: document.body.clientWidth + 5 - tooltip.clientWidth + "px";
				tooltip.style.top =
					e.pageY + tooltip.clientHeight + 10 < document.body.clientHeight
						? e.pageY + 10 + "px"
						: document.body.clientHeight + 5 - tooltip.clientHeight + "px";
			});
		}
	},
	methods: {
		showTooltip(work, event, index) {
			event.target.classList.toggle(".tooltip");
			// this.tooltip = !this.tooltip;

			// this.$set(work[index], "tooltip", true);
		}
	},
	data() {
		return {
			tooltip: false
		};
	},
	components: {
		"no-ssr": NoSSR
	}
};
</script>
