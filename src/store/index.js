import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import weather from "./modules/weather";

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  state: {
    calendar: {
      api_key: "AIzaSyC4L6jEKtjRwi3svBSlU_MYr9KiW0H4G8A",
      error: "",
      events: []
    },
    theme: {
      primary: "#00B8D4"
    },
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
    GET_EVENTS({ commit, state }) {
      commit("setLoading");
      axios
        .get(
          "https://www.googleapis.com/calendar/v3/users/me/calendarList?key=AIzaSyC4L6jEKtjRwi3svBSlU_MYr9KiW0H4G8A"
        )
        .then(res => {
          commit("set_Cal_Events", res.data);
          commit("setLoading");
        })
        .catch(error => {
          console.log(error);
          state.calendar.error = error;
        });
    },
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
    },
    set_Cal_Events(state, payload) {
      console.log(payload);
    }
  },
  getters: {}
});
export default store;
