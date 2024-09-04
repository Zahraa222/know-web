<template>
    <div class="popup-overlay" @click.self="closePopup">
      <div class="popup-content">
        <button class="close-button" @click="closePopup">X</button>
        <h3 v-if="events.length > 0">Events on {{ events[0].start }}</h3>
        <h3 v-else>No events available</h3>
        <ul>
          <li v-for="(event, index) in events" :key="index">
            {{ event.title }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventPopup',
    props: {
      events: Array,
    },
    emits: ['close'],
    methods: {
      closePopup() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    width: 300px;
    text-align: center;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  