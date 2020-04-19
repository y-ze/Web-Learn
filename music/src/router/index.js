import Vue from "vue";
import VueRouter from "vue-router";
import Recommend from "../views/Recommend.vue"
import Ranking from "../views/Ranking.vue"
import Singler from "../views/Singler.vue"
import Player from "../views/Player.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "recommend",
    component: Recommend
  },
  {
    path: "/recommend",
    name: "recommend",
    component: Recommend
  },
  {
    path: "/ranking",
    name: "ranking",
    component: Ranking
  },
  {
    path: "/single",
    name: "single",
    component: Singler
  },
  {
    path: "/player/:id",
    name: 'player',
    component: Player,
    props: true
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
