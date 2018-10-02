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




</v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Index",
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },
  methodes: {
    ...mapActions("some/nested/module", [])
  }
};
</script>

<style>
</style>
