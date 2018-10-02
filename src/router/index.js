import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Weather from "@/components/Weather";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/weather",
      name: "Weather",
      component: Weather
    }
  ]
});
