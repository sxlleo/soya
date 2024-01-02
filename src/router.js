import Vue from "vue";
import VueRouter from "vue-router";
const Works = () => import("./pages/Works.vue");
const Home = () => import("./pages/Home.vue");
const About = () => import("./pages/About");

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/home", name: "home", component: Home },
  { path: "/works", name: "works", component: Works },
  { path: "/about", name: "about", component: About },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
