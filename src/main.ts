import { createApp } from 'vue'
import App from './App.vue'
//import VueApollo from "vue-apollo";

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://partner.api.slerp.com/v1/graphql',
  headers: {
  authorization: 'Bearer ' + `${process.env.KEY}`,

    }
  // credentials: 'include'
  });

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

createApp(App).provide(DefaultApolloClient, apolloClient).mount('#app')

