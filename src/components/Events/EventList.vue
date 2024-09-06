<template>
    <div class="event-list">
      <h2>CURRENT PROGRAMS</h2>
      <EventItem v-for="event in events" :key="event.id" :event="event" />
    </div>
  </template>
  
  <script>
  import EventItem from './EventItem.vue';
  
  export default {
    name: 'EventList',
    components: {
      EventItem
    },
    data() {
      return {
        // Sample events, Add your own events here
        events: [
          { id: 1, title: 'Info about the event...', link: '#register' },
          { id: 2, title: 'Info about the event...', link: '#register' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .event-list {
    padding: 20px;
  }
  
  h2 {
    font-weight: bold;
  }
  </style>
  