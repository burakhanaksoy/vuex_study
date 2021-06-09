import { createStore } from "vuex";

export default createStore({
  state: {
    title: "My Custom Title",
    links: [
      "https://google.com",
      "https://facebook.com",
      "https://twitter.com",
    ],
    showSpinner: false,
  },
  getters: {
    countLinks: (state) => {
      return state.links.length;
    },
    spinnerState: (state) => {
      return state.showSpinner;
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
    SET_SPINNER: (state, val) => {
      state.showSpinner = val;
    },
  },
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link);
    },

    clearAllLinks: (context) => {
      context.commit("CLEAR_ALL_LINKS");
    },
    addLink: (context, link) => {
      context.commit("SET_SPINNER", true);
      setTimeout(() => {
        context.commit("ADD_LINK", link);
        context.commit("SET_SPINNER", false);
      }, 1500);
    },
  },
  modules: {},
});
