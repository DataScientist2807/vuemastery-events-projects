<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue"
import axios from 'axios'

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
     events: null
    };
  },
  created() {
    axios
    .get(
      'http://localhost:3000/events'
    )
    .then(response => {
      this.events = response.data
    })
    .catch(error => {
      console.log(error)
    } )
  }
};
</script>
<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center
  }
</style>
