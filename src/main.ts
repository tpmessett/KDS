import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
//import VueApollo from "vue-apollo";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { provideApolloClient } from '@vue/apollo-composable'
import { useQuery } from "@vue/apollo-composable";
import { gql } from "@apollo/client/core"

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://partner.api.slerp.com/v1/graphql',
  headers: {
  authorization: 'Bearer ' + process.env.VUE_APP_KEY,

    }
  });

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

provideApolloClient(apolloClient)

const store = createStore({
  state () {
    return {
      orders: {}
    }
  },
  mutations: {
    setLocation (state: any, location: string) {
      const QUERY = gql `
        query Orders {
          orders(where: {fulfillment_date: {_gte: "2021-12-14", _lt: "2021-12-15"}, store: {name: {_eq: "${location}"}}}) {
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
      `
      const { result, error } = useQuery(QUERY)
      console.log(result)
      console.log(error)
      state.orders = result
    }
  }
})

createApp(App).provide(DefaultApolloClient, apolloClient).use(store).mount('#app')


