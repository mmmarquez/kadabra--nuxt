<style lang="scss">

#fullscreen__slider {
  height: 100vh;
  width: 100%;
  position: relative;
  .slider {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .slider--cell {
      width: 100%;
      height: 100vh;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      .slide--caption {
        position: absolute;
        background: white;
        left: 4%;
        bottom: 100px;
        z-index: 1;
      }
    }
  }
}

//SLIDER BUTTONS
.slider--button {
  position: absolute;
  background: transparent;
  border: 0px;
  outline: 0;
  top: 0;
  bottom: 0;
  width: 10%;
  &.button--left {
    left: 0;
    &:hover {
        cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABSCAYAAAAb1fesAAAAAXNSR0IArs4c6QAABHZJREFUeAHVnD1MFEEUx937MHdcgQEbSzngNFeSgJiYXEz8iIYYsSBSUFiAjZZWFthYgRaaWJHYGGKIlZAYgjZqNNRqPDzOgsRCjaAkhhg+/A+5R4ZhZ/fY2515e827mZ073m/f+/9vb/bUORDTR1tbW7PjOLeQfu/W1lY1lUrdXVhYqDpx5Ons7Dy2sbExDZC8lP+vbDZbTEoTsXiaz+fPb25uvkCyR5SEs4D8k1AmWQ8BcxNVmUaSzW6JogVbYtFyXV1d6ZWVlYeAGXYDoTno6EyKBlxjsVhsAcwzwJS8ckwkEndgCnOsK6QR/y4utNk/TIwsLi4+FgfYArW3t5+D+J8iR1e9bCfvOD9Quf5qtfpGjMWDpSkI8QNmBvl5wXxIp9PdMowAYmXbQvxNTU2PcNZv+5zsacBcKJfL3wWE/GBToZr4Z/2cDJoZGxoaugSYVRmEnrPQUBDxE4AarQMFFb8KQmOrLdeI+AlAjVZMIQzxqyA0Nl6hsMRPAGo0qqEwxa+C0NgYUNjiJwA1Gmm5KMSvgtA4UlOIUvwEoMbIKhS1+FUQGkeiIRPiJwA1hg5kSvwqCI1DbTmT4icANYZiCjbEr4LQuOEK2RI/AaixIQ3ZFL8KQuPAQLbFTwBqDNRyHMSvgtB4X6bASfwEoMa6K8RN/CoIjevSUEdHx3FsKz3HBkaeXqhGdcNPPW5q7AvEVfy6E+TZcpzFrwNyNYU4iF8HtKdCcRG/DmiXhuIkfl+guIlfB7TdchD/cNDdft0b25p30GY9uNn6Fgm4GkQtMbHbP6jbILeVvNvfTaAyV3xg7nnt9ru9qc25BD7h//okUJicnMz5rGFzWFToCaBc77XUsry4vr7+rlAoHGWTtUciCdzS+4JrtMtY81u3DseLgJrHF7pTujVc5rddDlAvcY//BCpV0SUGqMMwjznY+zXdGg7zO1cKuMf/OZPJ9ADqlS4xQB1Ei07A5sdGR0d3Xqtbb2N+15WCSKBUKqWWlpbErzZGfBKagZVf5Wble4AIAlW4Aaj7GGs/n1DNj2jVPkB9pdfZjlogkRj0chYtJn78cEiXKKB+JpPJfrTsa90ak/OeOqhUKrOoQG+czMITSJzZuJmFZ8vJrVIziwfQ1XV53uW5VbOoG4gS524W+wYSYJzNwldDVBk5cjaLQEACjqtZBGo5uVrczKJhIILjYhahAQkwDmYRWENUGTkKs8AFq9WvIaECCThcqJZtfg0JteXkatkyi8iACM60WUQOJMBMmkXoGqLKyNGkWRgBEnCmzMJIy8nVitosjAMRXFRmYQ1IgEVhFsY0RJWRYxRmYRVIwIVtFlZbTq5WWGbBBojgGjULdkACrBGzsK4hqowcGzELlkACbj9mgX9GPU53Q1i2nFytes0C29VTqOwAeyCCq8cssHZQe6uE3ohLXF5enm9tbX2Preg+5JRxywtV+sZWQ24J+5kFYOP53w+IH1itra1NAeA0gaM6n3K5XHdsNESJUwSMg8+rAYxPispgt2kCzrj6H9CdaOYgqFJrAAAAAElFTkSuQmCC'), auto;
    }
  }
  &.button--right {
    right: 0;
    &:hover {
        cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABSCAYAAAAb1fesAAAAAXNSR0IArs4c6QAABMRJREFUeAHVm81LFGEcx53ZtcwKTFK6CLW+0qZ7CIyoLhFBpZ2k8qCFEEXZyf6APXeIOkV56BC9QXRIiCyMhQ5i4EmiclcR7CaaouvBdXf7PuGzPDPu8zizO888zwzI87q7v8/8nu93Z+cZjQocra2t+zOZzIBhGBE0x1Op1FvU82QsaIfR0dGxN51Of8/n80dp8ID5Wl1d3TM1NfWX9gWlNNfW1m6yMCRwtM+ur69PtLS0tAUFhMZpbi0z2i6UgGre3Nwcb2pqOl/oDEDFRODjgjhrcrncx8bGxkHBHK2GDAAZyMIblFdEkSGTTxsaGgYTicSmaJ7qMbLk8n19fb0I5KEoGADfmp+fH21vbz8gmqd6zGADQKYGEPgT/O1i+9k6TkAyHA53/8bB9utStwCRoOBsZ7LZ7HtAHRQEuWya5lV8X30WzFEyZNo/dXp6+hsy0IlM/LCPMW1tzSLEBFmoLi4uLtfX179AlmLobC4MWCvkZFysra09FIvFRufm5nLWYTWtbRmiYUAiqzCLbrR3MovbOpnFNg1RILYMklk4AiJwQTEL7pJjM0TqQTGLoqZgh6HtIJiF4wxRKLdmEY1Ga+lr/Sgda6hYMDqaRVlABFI3s3C95OyZ0s0sXJmCHYa2qVngt1MHSRrtt5Xk5Em/sig7QzRoYhb9/f2X0XZ0ZSHLLMrWEAViS4dmkcJFcBdOhKc/Q6QAEThVZuHZkmMzROqqzMITU7DD0LYKs5CWIQrlt1lI0xAFYks/zMJXIAIn2yykLzk2Q6Qu2yykmoIdhrZlmoXvGaJQsszCdw1RILb00iy0ACJwXpmFsiXHZojUXZrFPfvraVuJKdAPt5cuzOIC7wanNhmicOWahTYaokBsWYpZaA1E4JyaBab2zM7OjmkPRKDw2MER7PeOYPMgStrFDuyWrGL8uFamUCxQ0ufQLHZjz2pJO1PgQfX29qaRhV+8cdKPDO0JypIjT7q8QsxdAqBsKBQ6FRZM0GKora3tMGBGEMwxQUBZZO9OMpmc0DpDkUjkNAIl+711ApgVzLk2MzPziczRVkN42OMGAh0TwWB8BsvsJIXREigej5uAeQCQ5/gTPV6QqKysPIFl9pPNnlZLbusxt5cIkOztcg9kZrimpubu5ORkxj5JGyAi/o2NjQ8IsN0eJNPOon4fVwSPmD5LVQugUsRvoWAayk2hVPEzDJaqMqByxW+hYBpKltyW+Hf65q8QiZ9hsFR9B6Lf/LBk4Tc/ohyC+B9bonXQ8BXIS/Hz2HzTkNfiVwYkS/w8IKlLTqb4fQeSLX5fgfwQPw/Ic1PwS/zSgdyIv6qqqtN+2c8L0G2/J6bgQvzPcNk/WOyy323gvPllA6kSvxQgleLnAZVsCqrF7xmQLuLnAbnSkE7iLxtIN/GXBaSj+HlAO5qCruJ3DaS7+HlARU0hCOJ3DBQU8TsCcir+rf/uGuW9qcr+gim4ET/+VU1LGHIi/wNh+zzu5G6/zMt+r7JqYNv8HHaYv4jeEDf8pF/2iz7fzVgYT8NfEryA3O0fwoaS6xt+gveUOhTGUlvifMKKzuLnxFxhQhfDGLRA0a0+ncXPAwotLCys1dXVvcPS2wcQsgH7Glm7jmX2h/cinfv/AfbsdJQEBC91AAAAAElFTkSuQmCC'), auto;
    }
  }
}



</style>

<template>
  <div id="fullscreen__slider">
    <no-ssr>
      <flickity v-if="slides" ref="flickity" :options="flickityOptions" class="slider">
          <div class="slider--cell" v-for="slide in slides" :style="{ backgroundImage: 'url(' + slide.slide_image.url + ')' }">
            <div class="slide--caption" v-html="slide.slide_caption"></div>
          </div>
      </flickity>
    </no-ssr>

    <button @click="previous()" class="slider--button button--left"></button>
    <button @click="next()" class="slider--button button--right"></button>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
	data() {
		return {
			flickityOptions: {
				wrapAround: true,
				autoPlay: true,
				resize: true,
				setGallerySize: false,
				pageDots: false,
				prevNextButtons: false
				// any options from Flickity can be used
			}
		};
	},

	methods: {
		next() {
			this.$refs.flickity.next();
		},

		previous() {
			this.$refs.flickity.previous();
		}
	},
	computed: mapState(["slides"])
};
</script>
