import { createStore } from "vuex";

export default createStore({
  state: {
    title: "My Custom Title",
    links: [
      "https://google.com",
      "https://facebook.com",
      "https://twitter.com",
    ],
  },
  getters: {
    countLinks: (state) => {
      return state.links.length;
    },
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    CLEAR_ALL_LINKS: (state) => {
      state.links = [];
    },
  },
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link);
    },

    clearAllLinks: (context) => {
      context.commit("CLEAR_ALL_LINKS");
    },
  },
  modules: {},
});
