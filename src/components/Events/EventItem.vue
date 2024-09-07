Written by Zahraa Alhmood
handles the event item in the event list. It displays the event image, title, description, and a link to register for the event.
The component receives the event object as a prop and displays the event information.
The component uses the event object to display the event image, title, description, and link.
<template>
    <div class="event-item">
      <img :src="event.image" alt="Event Image">
      <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.description }}</p>
        <a :href="event.link">register link</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventItem',
    props: {
      event: Object,
    }
  }
  </script>
  
  <style scoped>
  .event-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .event-item img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  </style>
  