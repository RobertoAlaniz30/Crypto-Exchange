import {createWebHistory, createRouter} from "vue-router"

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import CoinDetail from "@/views/CoinDetail.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/CoinDetail/:id(.*)",
    name: "Coin-Detail",
    component: CoinDetail,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;