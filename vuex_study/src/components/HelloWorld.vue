<template>
  <body>
    <div class="hello">
      <div class="left">
        <h1>{{ custom }}</h1>
        <form @submit.prevent="addLinks">
          <input
            class="link-input"
            type="text"
            placeholder="Add a link"
            v-model="newLink"
          />
          <button class="btn-add"><span class="add-btn-text">Add</span></button>
        </form>
        <ul>
          <li v-for="(link, index) in siteLinks" v-bind:key="index">
            {{ link }}
            <button v-on:click="removeLinks(index)" class="rm">
              <span class="rm-text">Remove</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="right">
        <stats />
      </div>
    </div>
  </body>
</template>

<script>
import Stats from "@/components/Stats.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      newLink: "",
    };
  },
  components: { Stats },
  computed: {
    ...mapState({
      custom: "title",
      siteLinks: "links",
    }),
  },
  methods: {
    ...mapActions(["addLink"]),
    addLinks: function () {
      if (this.newLink.trim() != "") {
        this.$store.dispatch("addLink", this.newLink);
        this.newLink = "";
      }
    },
    ...mapActions(["removeLink"]),
    removeLinks: function (link) {
      this.$store.dispatch("removeLink", link);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* html, */
/* #app,
.home {
  height: 100%;
} */

.hello {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 48rem;
}
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}
.left,
.right {
  padding: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 25px;
}
.right {
  grid-area: right;
  background-color: #e9e9e9;
}

input {
  border: none;
  padding: 20px;
  width: 20rem;
  box-shadow: 0 5px 5px lightgray;
  margin-bottom: 3rem;
  outline: none;
}
.btn-add {
  border: none;
  padding: 20px;
  width: 5rem;
  box-shadow: 0 5px 5px lightgray;
  margin-bottom: 3rem;
  outline: none;
}

.btn-add:hover {
  background-color: #3e8e41;
}

.rm {
  height: 30px;
  padding: 5px;
  border: none;
  cursor: pointer;
}

.add-btn-text {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 15px;
}
</style>
