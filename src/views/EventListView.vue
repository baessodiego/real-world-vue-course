<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>



<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref, onMounted } from 'vue';
import EventService from '@/services/EventService';

const events = ref([]);

onMounted(() => {
  EventService.getEvents()
    .then((res) => {
      events.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>



<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
