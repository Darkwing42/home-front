import axios from "axios";
export default {
  namespaced: true,
  state: {
    error: "",
    api_key: "6b21dea1b860e078964f59ba1c075972",
    weather: null,
    current_weather: {
      current_temp: null
    }
  },

  actions: {
    GET_WEATHER({ commit, state }, city) {
      axios
        .get(
          "https://samples.openweathermap.org/data/2.5/weather?q=${encodeURI(city)},de&appid=${state.api_key}"
        )
        .then(response => {
          commit("set_weather", response.data);
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
  }
};
