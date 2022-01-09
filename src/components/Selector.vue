<template>
  <div v-if="categories">
    <div v-for="category in categories" :key="category.id">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="{{category.id}}" id="{{category.id}}">
        <label class="form-check-label" for="{{category.id}}">
          {{category.name}}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {

  setup() {
    const store = useStore()
    return {
      categories: computed(() =>
        store.state.orders["categories"]
      )
    }
  }
}
</script>

<style>

</style>
