import Vue from "vue";
import VueRouter from "vue-router";
import HouseIndex from "../views/HouseIndex.vue";
import AptView from "@/views/AptView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HouseIndex,
  },
  {
    path: "/apt",
    name: "apt",
    component: AptView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
