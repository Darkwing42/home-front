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
<v-layout xs12 sm6>
  <v-flex>
    <v-card>
    <v-btn v-on:click="get_weather" >Bochum Wetter</v-btn>
    <p> {{weather}} </p>
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
      city: "Bochum"
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
      this.$store.dispatch("GET_WEATHER", "Bochum");
    }
  }
};
</script>

<style>
</style>
