import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Weather from "@/components/Weather";
import Calendar from "@/components/Calendar";

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
    },
    {
      path: "/cal",
      name: "Calendar",
      component: Calendar
    }
  ]
});
