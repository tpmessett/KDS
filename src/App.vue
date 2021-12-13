<template>
  <Navbar></Navbar>
  <div class="main-body">
    <ticket></ticket>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Ticket from './components/Ticket.vue'
// import { useQuery } from "@vue/apollo-composable";
// import { gql } from "@apollo/client/core"
// const QUERY = gql `
//   query {
//     stores {
//       id
//       name
//     }
//   }
// `;
export default {
  name: 'KDS',
  components: {
    Navbar,
    Ticket,
  // }, setup() {
  //   const { result, error } = useQuery(QUERY)
  //   console.log(result)
  //   console.log(error)
  //   return {
  //     result,
  //     error,
  //   }
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
