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
<h1>Calendar</h1>
<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=jeanmarc.wagner42%40gmail.com&amp;color=%231B887A&amp;src=de.german%23holiday%40group.v.calendar.google.com&amp;color=%230F4B38&amp;ctz=Europe%2FBerlin" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      loading: state => state.loading,
      events: state => state.calendar.events
    })
  },
  methods: {
    get_events: function(event) {
      this.$store.dispatch("GET_EVENTS");
    }
  }
};
</script>

<style>
</style>
