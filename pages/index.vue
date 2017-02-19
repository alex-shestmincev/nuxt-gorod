<template>
  <section>
    <search-form/>
    <div class="container">
      <list-title></list-title>
    </div>
  </section>
</template>

<style scoped>

</style>



<script>
import ListTitle from '~components/ListTitle.vue'
import SearchForm from '~components/SearchForm.vue'

export default {
  middleware: ['getAllCategories', 'getAllCities'],
  components: {
    ListTitle,
    SearchForm,
  },

  computed: {
    categories() { return this.$store.state.category.list },
    cities() { return this.$store.state.city.list },
  },
  methods () {

  },
  head () {
    return {
      title: `Бесплатные объявления Украина. Доска бесплатных объявлений в Украине. Дать объявление в Украине - доска Objavlenie.net`,
    }
  }
}
</script>
