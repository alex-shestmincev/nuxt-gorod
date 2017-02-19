<template>
  <div id="searchform">
    <div  class="container">
      <form class="form-horizontal" @submit.prevent="validateBeforeSubmit" ref="form">
        <div class="form-group">
          <div class="col-sm-6">
            <input type="text" v-model="searchQuery" class="form-control" placeholder="Поиск">
          </div>
          <div class="col-sm-2">
            <select v-model="categoryKey" class="form-control">
              <option value="">Выберите категорию</option>
              <option v-for="category in categories" :value="category.key">{{category.title}}</option>
            </select>
          </div>
          <div class="col-sm-2">
            <select v-model="cityKey" class="form-control">
              <option value="Выберите город"></option>
              <option v-for="city in cities" :value="city.key">{{city.title}}</option>
            </select>
          </div>
          <div class="col-sm-2 text-right">
            <button type="submit" class="btn btn-default">Поиск</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      searchQuery: this.$route.query.search,
      categoryKey: this.$route.params.category,
      cityKey: this.$route.params.city || 'donetsk',
    }
  },
  computed: {
    categories() { return this.$store.state.category.list },
    cities() { return this.$store.state.city.list },
  },
  methods: {
    validateBeforeSubmit(e) {
      const params = {};
      if (this.categoryKey) params.category = this.categoryKey;
      if (this.cityKey && this.cityKey !== 'donetsk') params.city = this.cityKey

      const query = {}
      if (this.searchQuery) query.find = this.searchQuery;

      this.submitForm({ params, query });
    },
    submitForm({ params, query }) {
      this.$router.push({name: 'search', params, query})
    }
  }

}
</script>

<style scoped>
  #searchform{
    background-color: #eee;
    padding: 10px 0 0 0;
  }
</style>
