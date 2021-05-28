<template>
  <div class="stats">
    <h1>A different component</h1>
    <p>There are currently {{ linkAmount }} links.</p>
    <button v-on:click="removeAllLinks" class="btn-rm-all">
      Remove All Links
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Stats",
  computed: {
    ...mapGetters({ linkAmount: "countLinks" }),
  },
  methods: {
    ...mapActions(["clearAllLinks"]),
    removeAllLinks: function () {
      this.clearAllLinks();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
