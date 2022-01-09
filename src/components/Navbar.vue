<template>
  <div class="navbar">
    <div>
      <img src="../assets/logo.png" alt="Slerp">
    </div>
    <div>
      <select name="stores" v-if="result && result.stores" @change="setLocation($event)" v-model="loc">
        <option value="" disabled selected>Select your Store</option>
        <option v-for="location in result.stores" :key="location.id">
          {{ location.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  import { useQuery } from "@vue/apollo-composable";
  import { gql } from "@apollo/client/core"
  import { ref } from "vue"
  const QUERY = gql `
    query {
      stores(where: {archived_at: {_is_null: true}}) {
        id
        name
      }
    }
  `;
  export default {
    data: function () {
      return {
        loc: ""
      };
    },
    methods: {
    setLocation: function (event) {
      console.log("checking location orders")
      this.$store.dispatch('setLocation', event.target.value)
      setInterval(() => {
        this.$store.dispatch('setLocation', event.target.value)
        console.log(`${event.target.value} checked`)
      }, 30000)
    },
  },

   setup() {
      let result = ref();
      const { onResult } = useQuery(QUERY)
      onResult(({ data }) => {
        result.value = data
    })
      return {
        result
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  min-height: 56px;
  background-color: #141323;
  position: fixed;
  top: 0;
  text-align: left;
}

.navbar img {
  max-height: 40px;
  max-width: 40px;
  padding: 12px 0 8px 40px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

select {
  margin: 12px 40px;
  padding: 12px;
}
</style>
