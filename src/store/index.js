import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import weather from "./modules/weather";

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  state: {
    loading: false,
    weather: {
      data: false,
      city_name: "",
      temp: "",
      min_temp: "",
      max_temp: "",
      icon: "",
      humidity: "",
      pressure: ""
    },
    api_key: "6b21dea1b860e078964f59ba1c075972"
  },
  actions: {
    GET_WEATHER({ commit }, city) {
      commit("setLoading");
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
            city
          )},de&appid=6b21dea1b860e078964f59ba1c075972&units=metric`
        )
        .then(response => {
          commit("set_weather", response.data);
          commit("setLoading");
        })
        .catch(error => {
          console.log(error);
          state.error = error;
        });
    }
  },
  mutations: {
    set_weather(state, payload) {
      console.log(payload);
      state.weather.data = true;
      state.weather.city_name = payload.name;
      state.weather.temp = payload.main.temp;
      state.weather.min_temp = payload.main.temp_min;
      state.weather.max_temp = payload.main.temp_max;
      state.weather.icon = payload.weather[0].icon;
      state.weather.humidity = payload.main.humidity;
      state.weather.pressure = payload.main.pressure;
    },
    setLoading(state) {
      state.loading = !state.loading;
    }
  },
  getters: {}
});
export default store;
