<template>
  <router-link class="event-link" 
  :to="{ name: 'EventDetails', params: { id: event.id }}">
    <div class="event-card">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>
  
  <script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
  <style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  margin-bottom: 18px;
  cursor: pointer;
  border: 1px solid #39495c;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
}
</style>