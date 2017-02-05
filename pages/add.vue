<template>
  <section class="container">
    <h1 class="text-center">Дать объявление в Украине</h1>
    <div>

    </div>
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
      console.log('fetch')
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
