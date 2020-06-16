<template>
  <div>
    {{ person.name }}
    <img :src="person.imageLink">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PersonPage',
  async fetch ({ route, store }) {
    await store.dispatch('person/getPerson', {
      id: route.params.id
    })
    console.log(route.params)
  },
  computed: {
    ...mapGetters('person', {
      person: 'setPerson'
    })
  }
}
</script>

<style scoped>

</style>
