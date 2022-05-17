import Vue from "vue";
import VueRouter from "vue-router";
import HouseIndex from "../views/HouseIndex.vue";
import AptView from "@/views/AptView.vue";
import UserView from "@/views/UserView.vue";

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
  {
    path: "/user",
    name: "user",
    component: UserView,
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/User/UserLogin.vue"),
      },
      {
        path: "mypage",
        name: "mypage",
        component: () => import("@/components/User/UserMypage.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/components/User/UserRegister.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
