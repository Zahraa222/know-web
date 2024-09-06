Written by Zahraa Alhmood
Used for the main page of the website to display the events in a list format.
The component uses the EventItem component to display each event in the list.
The events are hardcoded in the data section of the component, Add/delete events as needed.

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
        // Sample events, Add your own events here. Add your images in the assets folder Replace the image path with the actual image path. i.e Replace logo.png with the actual file name.
        events: [
          { id: 1, title: 'Info about the event...', description: 'Lorem ipsum Lorem ipsum', link: '#register', image:require('@/assets/logo.png') },
          { id: 2, title: 'Info about the event...', description: 'Lorem ipsum Lorem ipsum', link: '#register', image:require('@/assets/logo.png') }
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
  