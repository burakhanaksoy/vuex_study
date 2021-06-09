<template>
  <div id="app">
    <div v-if="spinnerStatus" class="spinner-div">
      <pulse-loader
        :loading="loading"
        :color="color"
        :size="size"
        class="spinner"
      ></pulse-loader>
    </div>
    <router-view />
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState } from "vuex";
export default {
  components: { PulseLoader },
  computed: {
    ...mapState({
      spinnerStatus: "showSpinner",
    }),
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 100%;
}
.spinner-div {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 25;
  background: rgba(0, 0, 0, 0.3);
}

.spinner {
  position: relative;
  top: 50%;
  left: 50%;
}
</style>
