<template>
  <section class="container">
    <h1 class="text-center">Доска бесплатных объявлений в Украине</h1>
    <h2 class="text-center">Категории объявлений Украина</h2>

    <category-list :categories="categories">123</category-list>

  </section>
</template>

<style scoped>

</style>

<script>
import CategoryList from '~components/CategoryList.vue'

export default {
  components: {
    CategoryList,
  },

  fetch ({ store }) {
    return store.dispatch('category/list')
  },
  computed: {
    categories() { return this.$store.state.category.list },
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
