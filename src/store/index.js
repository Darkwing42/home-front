import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import weather from "./modules/weather";

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  state: {
    loading: false,
    weather: null,
    api_key: "6b21dea1b860e078964f59ba1c075972"
  },
  actions: {
    GET_WEATHER({ commit }, city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
            city
          )},de&appid=6b21dea1b860e078964f59ba1c075972`
        )
        .then(response => {
          commit("set_weather", response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
          state.error = error;
        });
    }
  },
  mutations: {
    set_weather(state, payload) {
      state.weather = payload;
    }
  },
  getters: {}
});
export default store;
