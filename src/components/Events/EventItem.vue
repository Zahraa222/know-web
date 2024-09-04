<template>
    <div class="event-item">
      <img src="../../assets/logo.png" alt="Event Image">
      <div>
        <p>{{ event.title }}</p>
        <a :href="event.link">register link</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventItem',
    props: {
      event: Object
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
  