<template>
  <Navbar></Navbar>
  <div class="main-body">

    <ticket></ticket>
    {{ location }}
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Ticket from './components/Ticket.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'KDS',
  components: {
    Navbar,
    Ticket,
  }, setup() {
    const store = useStore()
    return {
      location: computed(() => store.state.orders)
    }
  },
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
