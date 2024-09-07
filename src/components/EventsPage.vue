Written by Zahraa Alhmood
This component is used to display the Various events available in both calendar and list format.
<template>
    <div id="app">
        <EventList />
        <EventCalendar />
    </div>
</template>

<script>
    import EventList from './Events/EventList.vue';
    import EventCalendar from './Events/EventCalendar.vue';

    export default {
    name: 'App',
    components: {
        EventList,
        EventCalendar
    }
    }
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f8f8f8;
}

.navbar ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.navbar ul li {
    margin-right: 15px;
}

.navbar ul li a {
    text-decoration: none;
    color: #000;
}

input[type="search"] {
    padding: 5px;
}
</style>
  