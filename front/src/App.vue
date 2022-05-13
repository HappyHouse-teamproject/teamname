<template>
  <div id="app">
    <house-header />
    <router-view />
    <house-footer />
  </div>
</template>

<script>
import HouseHeader from "@/components/HouseHeader.vue";
import HouseFooter from "./components/HouseFooter.vue";

export default {
  components: {
    HouseHeader,
    HouseFooter,
  },
};
</script>
<style></style>
