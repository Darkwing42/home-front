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
            label="Stadt"
            v-model="city"
          ></v-text-field>
      <v-btn style="left: 34%" @click="get_weather">Los!</v-btn>
      
    </v-card>
  </v-flex>
  <v-flex xs12 sm6>
    <v-card>
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
