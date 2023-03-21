<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EventService from "@/services/EventService";

const event = ref(null);
const props = defineProps(["id"]);

onMounted(() => {
    // fetch event
    EventService.getEventDetails(props.id)
        .then((res) => {
            event.value = res.data;
        })
        .catch((err) => {
            console.log(err);
        });
});
</script>

<style lang="scss" scoped></style>