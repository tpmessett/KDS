import { createApp } from 'vue'
import App from './App.vue'
//import VueApollo from "vue-apollo";

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  // uri: 'https://graph.api.slerp.com/v1/graphql',
  uri: 'https://graph-qa.api.slerpdemo.com/v1/graphql',
  // fetchOptions: {
  // mode: 'no-cors',
  // },
  headers: {
  authorization: 'Bearer ' + 'c0988a900a70346e9c99a3c3ce63647b',

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

