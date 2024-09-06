Written by Zahraa Alhmood
Main component that displays the calendar and the events. 
It uses the vue-cal package to display the calendar and the events. The events are hardcoded in the data section of the component. 
The component also includes a child component called EventPopup.vue that is displayed when an event is clicked. 
The component has a method called showEventPopup that is called when an event is clicked. 
The method filters the events array to get the selected event and then sets the selectedEvents array to the selected event. 
The showPopup variable is set to true to display the EventPopup.vue component.
Package: vue-cal
<template>
  <div class="mainLayout">
    <h2>CALENDAR</h2>
    <vue-cal
      class="vuecal--green-theme"
      style="width: 600px;"
      v-model="view"
      :events="CalendarEvents"
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
      //Sample events, Add your own events here
      events: [
        { start: '2024-09-10 12:00', end: '2024-09-10 13:00', title: 'About us', content: 'Join us for an introduction of our mission and who we are!'},
        { start: '2024-09-10 15:30', end: '2024-09-10 17:30', title: 'Programs', content: 'Dive into the different fields you can pursue by learning about available programs', split: 2 },
        { start: '2024-09-13 08:00', end: '2024-09-13 10:00', title: 'Community retreat', content: 'Meet fellow members and make connections!'},
        { start: '2024-09-13 16:45', end: '2024-09-13 18:45', title: 'Job Board 101', content: 'Learn about job board tips and tricks!'},
        { start: '2024-09-20 09:00', end: '2024-09-20 11:30', title: 'Applicaitons: an Overview', content: 'Learn about how to stand out in applications'},
        { start: '2024-09-25 12:00', end: '2024-09-25 13:00', title: 'Lunch', content: 'Enjoy various meals!'},
        { start: '2024-09-25 15:30', end: '2024-09-25 17:30', title: 'Interviews', content: 'Learn about how to prepare for interviews'},
        { start: '2024-09-30 08:00', end: '2024-09-30 10:00', title: 'Networking', content: 'Learn about how to network effectively'},
        { start: '2024-09-30 16:45', end: '2024-09-30 18:45', title: 'Resume Workshop', content: 'Learn about how to create a standout resume'},
        { start: '2024-09-30 19:00', end: '2024-09-30 20:00', title: 'Closing Ceremony', content: 'Join us for the closing ceremony of the month!'},
        { start: '2024-09-30 20:00', end: '2024-09-30 21:00', title: 'After Party', content: 'Join us for the after party!'},
      ],
      selectedEvents: [],
      showPopup: false,
    };
  },
  methods: {
    showEventPopup(event) {
      this.selectedEvents = this.events.filter(e => 
        new Date(e.start).getTime() === new Date(event.start).getTime()
      );
      this.showPopup = true;
    },
  },
  computed: {
      CalendarEvents() {
      return this.events.map(({ start, end, title }) => ({
        start,
        end,
        title, // Only pass title to the calendar
      }));
    }
  }
};
</script>

<style>
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

.vuecal__event  {
  min-width: 0;
  padding: 0;
  margin-top: 4px;
  color: #fff;
  justify-content: center;
  flex-direction: column;
  display: flex;
  background-color: #42b983;

}

.vuecal--green-theme .vuecal__cell--selected .vuecal__cell-events-count {
  background-color: #fff;
}

</style>
