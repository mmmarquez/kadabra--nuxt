module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: "Abrakadabra",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "Abrakadabra" }
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href:
					"https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
			}
		]
	},
	/*
  ** Customize the progress bar color
  */
	loading: { color: "#3B8070" },
	/*
  ** Build configuration
  */
	/*
  ** Add CSS
  */
	css: [{ src: "~assets/styles/main.scss", lang: "scss" }],
	plugins: [
		{ src: "~/plugins/flickity", ssr: false },
		{ src: "~/plugins/masonry", ssr: false }

		// { src: "~/plugins/vue-axios", ssr: false }
	],
	build: {
		vendor: ["axios"],
		postcss: [
			require("postcss-cssnext")()
			// require("autoprefixer")({
			// 	browsers: ["last 4 versions", "ie >= 9"]
			// })
		],
		// postcss: {
		//   'postcss-cssnext': {
		//     browsers: ['last 4 versions', 'ie >= 9']
		//   }
		// },
		/*
		** Run ESLint on save
		*/
		extend(config, ctx) {
			// config.module.rules.forEach(rule => {
			// 	if (rule.test.toString() === "/\\.vue$/") {
			// 		rule.options.loaders.scss[2].options.data =
			// 			'@import ".!/assets/styles/main";';
			// 	}
			// });
		}
	}
};
