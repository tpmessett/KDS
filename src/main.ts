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
  actions: {
    setLocation (state: any, location: string) {
      const today = new Date()
      const date = today.toISOString().split('T')[0]
      const tomorrow = new Date()
      tomorrow.setDate(today.getDate() + 1)
      const date_tomorrow = tomorrow.toISOString().split('T')[0]
      const QUERY = gql `
        query Orders {
          orders(where: {store: {name: {_eq: "${location}"}}, _or: [{inserted_at: {_gte: "${date}"}, fulfillment_date: {_is_null: true}}, {fulfillment_date: {_gte: "${date}", _lt: "${date_tomorrow}"}}]}) {
          transaction_id
          id
          delivery_eta
          fulfillment_date
          pickup_time
          customer_details
          order_notes
          order_items {
            quantity
            product_variant {
              name
              id
              product {
                category {
                  name
                }
              }
            }
            applied_modifiers {
              modifier {
                name
              }
              quantity
              modifier_id
            }
          }
        }
        }
      `

      const { onResult } = useQuery(QUERY)
      onResult(({ data }) => {
        state.orders =  data
        console.log(state.orders)
    })
   }
  }
 })

createApp(App).provide(DefaultApolloClient, apolloClient).use(store).mount('#app')




