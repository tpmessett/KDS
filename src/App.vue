<template>
  <Navbar></Navbar>
  <div class="main-body" v-if="orders">
    <ticket v-for="order in orders" :key="order.id"
    :transaction_id="order.transaction_id"
    :delivery_date="order.delivery_date"
    :contact_num="order.customer_details.contact_num"
    :first_name="order.customer_details.first_name"
    :last_name="order.customer_details.last_name"
    :pickup_notes="order.pickup_notes"
    :dropoff_notes="order.dropoff_notes"
    :order_notes="order.order_notes"
    :order_contents="order.order_items"
    :fulfillment_date="order.fulfillment_date"
    >
    </ticket>
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
    console.log(store.state.orders)
    return {
      orders: computed(() => store.state.orders["orders"]),
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
  display:  flex;
  overflow: auto;
}
</style>
