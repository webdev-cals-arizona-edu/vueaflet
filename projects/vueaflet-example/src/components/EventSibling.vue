<template>
  <div class="event-sibling">
    <h3>Sibling component listening to polygon hovers:</h3>
    <p>Count: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: 'event-sibling',

  data() {
    return {
      counter: 0
    }
  },

  created() {
    this.$vueafletBus.$on(`polygon-working-with-events-mouseover`, () => {
      this.counter++
    })

    console.log(this.$vueafletBus)
  }
}
</script>

<style scoped>

</style>