<template>
<v-container v-if="this.$store.state.loading">
  <v-progress-circular id="loading"
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
</v-container>

<v-container v-else>
<v-layout align-center justify-center column fill-height>
  <v-flex xs12 sm6>
  
    <v-card class="input">
      
      <v-text-field
            @keyup.enter="get_weather"
            label="Stadt"
            v-model="city"
          ></v-text-field>
      <v-btn style="left: 34%" class="primary" @click="get_weather" >Los!</v-btn>
      
    </v-card>
  </v-flex>
  <v-flex xs12 sm6>
    <v-card v-if="weather.data">
        <v-toolbar>
        <v-toolbar-title><b>Stadt: {{weather.city_name}} </b></v-toolbar-title>
        
        <v-toolbar-items>
          <v-btn flat icon left @click="reloadWeather"><v-icon>autorenew</v-icon></v-btn>
        </v-toolbar-items>
        </v-toolbar>
        <v-list>
          <v-list-tile>aktuelle Temp.: {{weather.temp}} °C <img :src="'http://openweathermap.org/img/w/' + weather.icon + '.png'" alt=""></v-list-tile>
          <v-list-tile>min. Temp: {{ weather.min_temp}} °C</v-list-tile>
          <v-list-tile>max. Temp: {{ weather.max_temp}} °C</v-list-tile>
          <v-list-tile>Feuchtigkeit: {{ weather.humidity }} %</v-list-tile>
          <v-list-tile>Luftdruck: {{ weather.pressure}} hPa</v-list-tile>

          
        </v-list>
        
      </v-card>
  </v-flex>
</v-layout>

</v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Weather",
  data() {
    return {
      time: "",
      city: ""
    };
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      weather: state => state.weather
    })
  },
  methods: {
    get_weather: function(event) {
      this.$store.dispatch("GET_WEATHER", this.city);
      this.city = ""
    },
    set_time: function() {
      this.time = new Date()
    },
    reloadWeather: function(event) {
      this.$store.dispatch("GET_WEATHER", this.weather.city_name)
    }
  }
};
</script>

<style>
.input {
  width: 300px;
  heigth: 300px;
}
</style>
