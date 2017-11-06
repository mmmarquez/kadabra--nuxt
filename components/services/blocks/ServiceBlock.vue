<style lang="scss" scoped>

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


  #service__card {
    background: #222;
    height: 100%;
    width: 100%;
    .card--grid {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      .card--item {
        flex: 1;
        color: white;
        font-size: 1.2em;
        letter-spacing: 1px;
        border: 1px solid white;
        padding: 2rem;
        .card--thumb {
          @include aspect-ratio(16, 9);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .card--content {
          // padding: 1%;
        }
      }
    }
  }

///wp-json/acf/v2/options/slides

</style>

<template>
  <div id="service__card">
    <div class="card--grid">
      <div class="card--item">
        <div class="card--thumb" :style="{ backgroundImage: 'url(' + serviceData.image.url + ')' }">
        </div>
      </div>
      <div class="card--item">
        <div class="card--title">
          {{serviceData.service}}
        </div>
        <div class="card--content" v-html="serviceData.content">
        </div>
        <div class="card--links">
          <a href="#">View More Related Projects >></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		serviceData: undefined
	}
};
</script>
