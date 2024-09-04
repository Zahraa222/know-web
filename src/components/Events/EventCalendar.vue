<template>
  <div class="mainLayout">
    <h2>CALENDAR</h2>
    <vue-cal
      class="vuecal--green-theme"
      v-model="view"
      :events="events"
      :time="true"
      default-view="month"
      :views="['month', 'week', 'day']"
      :on-event-click="showEventPopup"
      :time-from="8 * 60"
      :time-to="19 * 60"
      :time-step="30"
      hide-weekends
    />
    <EventPopup v-if="showPopup" :events="selectedEvents" @close="showPopup = false" />
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import EventPopup from './EventPopup.vue';

export default {
  name: 'EventCalendar',
  components: {
    VueCal,
    EventPopup,
  },
  data() {
    return {
      view: 'month',
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
}

h2 {
  font-weight: bold;
  text-align: center;
}
</style>
