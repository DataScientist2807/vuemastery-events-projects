<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 45454,
          category: "animal welfare",
          title: "Cat Adoption Day",
          date: "January 28, 2022",
          time: "12:00",
        },
        {
          id: 23233,
          category: "animal welfare 2",
          title: "Cat Adoption Day 2",
          date: "January 30, 2022",
          time: "12:00",
        },
      ],
    };
  },
};
</script>
<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center
  }
</style>
