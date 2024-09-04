<template>
  <div class="mainLayout">
    <h2>CALENDAR</h2>
    <vue-cal
      style="height: 250px;"
      :events="events"
      :time="false"
      :on-event-click="showEventPopup"
    />
    <EventPopup v-if="showPopup" :events="selectedEvents" @close="showPopup = false" />
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'; // Import the styles
import EventPopup from './EventPopup.vue'; // Pop-up component

export default {
  name: 'EventCalendar',
  components: {
    VueCal,
    EventPopup,
  },
  data() {
    return {
      events: [
        { start: '2024-09-10', end: '2024-09-10', title: 'Event 1' },
        { start: '2024-09-10', end: '2024-09-10', title: 'Event 2' },
        { start: '2024-09-15', end: '2024-09-15', title: 'Event 3' },
        { start: '2024-09-15', end: '2024-09-15', title: 'Event 4' },
        { start: '2024-09-20', end: '2024-09-20', title: 'Event 5' },
        { start: '2024-09-20', end: '2024-09-20', title: 'Event 6' },
        { start: '2024-09-25', end: '2024-09-25', title: 'Event 7' },
        { start: '2024-09-25', end: '2024-09-25', title: 'Event 8' },
      ],
      selectedEvents: [],
      showPopup: false,
    };
  },
  methods: {
    showEventPopup(event) {
      this.selectedEvents = this.events.filter(e => e.start === event.start);
      this.showPopup = true;
    },
  },
};
</script>

<style scoped>
.mainLayout {
  padding: 20px;
  height: 250px;
}

.calendar{
  height: 250px;
}

h2 {
  font-weight: bold;
}
</style>
