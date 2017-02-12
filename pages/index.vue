<template>
  <section class="container">
    <h1 class="text-center">Доска бесплатных объявлений в Украине</h1>
    <category-list :parentCategories="parentCategories"></category-list>
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
  middleware: ['getAllCategories'],
  computed: {
    parentCategories() { return this.$store.getters['category/parentCategories'] },
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
