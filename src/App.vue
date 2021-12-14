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
import { useQuery } from "@vue/apollo-composable";
import { gql } from "@apollo/client/core"
const QUERY = gql `
  query Orders {
    orders(where: {store: {name: {_eq: "${location}"}}, fulfillment_date: {_eq: "2021-12-14"}}) {
    delivery_eta
    fulfillment_date
    pickup_time
    recipient_details
    order_notes
    order_items {
      quantity
      product_variant {
        name
      }
      applied_modifiers {
        modifier {
          name
        }
        quantity
      }
    }
  }
  }
`;
export default {
  name: 'KDS',
  components: {
    Navbar,
    Ticket,
  }, setup() {
    const store = useStore()
    const { result, error } = useQuery(QUERY)
    console.log(result)
    console.log(error)
    return {
      result,
      error,
      location: computed(() => store.state.location)
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
