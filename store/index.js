import axios from "~/plugins/axios";

export const state = () => ({
	works: [],
	slides: [],
	services: [],
	clients: []
});

export const mutations = {
	setWorks(state, works) {
		state.works = works;
	},
	setSlides(state, slides) {
		state.slides = slides;
	},
	setClients(state, clients) {
		state.clients = clients;
	},
	setServices(state, services) {
		state.services = services;
	}
};

export const actions = {
	async LOAD_WORKS({ commit }, dataUrl) {
		const response = await axios.get(dataUrl);
		const data = response.data;
		const works = data.map(x => x.acf);
		commit("setWorks", works);
	},

	async LOAD_SLIDES({ commit }, dataUrl) {
		const response = await axios.get(dataUrl);
		const data = response.data;
		const slides = data.map(x => x.acf);
		commit("setSlides", slides);
	},

	async LOAD_CLIENTS({ commit }, dataUrl) {
		const response = await axios.get(dataUrl);
		const data = response.data;
		const clients = data.map(x => x.acf);
		commit("setClients", clients);
	},

	async LOAD_SERVICES({ commit }, dataUrl) {
		const response = await axios.get(dataUrl);
		const data = response.data;
		const services = data.map(x => x.acf);
		commit("setServices", services);
	}
};
