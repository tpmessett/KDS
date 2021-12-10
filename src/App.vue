<template>
  <Navbar></Navbar>
  <div class="main-body">
    <ticket></ticket>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Ticket from './components/Ticket.vue'

export default {
  name: 'KDS',
  components: {
    Navbar,
    Ticket
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin:  0;
}

.main-body {
  padding: 72px 40px;
}

</style>
