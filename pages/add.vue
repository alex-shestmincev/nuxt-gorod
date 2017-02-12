<template>
  <section class="container">
    <h1 class="text-center">Дать объявление в Украине</h1>
    <hr />
    <form @submit.prevent="validateBeforeSubmit" ref="form">
      <div class="form-group">
        <label for="title">Название</label>
        <input type="text" v-model.trim="ad.title" class="form-control" id="title" placeholder="Название" required />
      </div>

      <div class="form-group">
        <label for="address">Адрес</label>
        <input type="text" v-model.trim="ad.address" class="form-control" id="address" placeholder="Адрес" required />
      </div>

      <div class="form-group">
        <label for="title">Категория</label>
        <select v-model="parentCategoryId" class="form-control" required>
          <option key=""></option>
          <option v-for="parent in parentCategories" :value="parent.id">{{parent.title}}</option>
        </select>
      </div>

      <div v-if="parentCategoryId" class="form-group">
        <label for="title">Подкатегория</label>
        <select v-model="ad.category_id" class="form-control" required>
          <option key=""></option>
          <option v-for="category in subCategories" :value="category.id">{{category.title}}</option>
        </select>
      </div>

      <div class="form-group">
        <div>
          <label for="description">Описание</label>
        </div>
        <div>
          <textarea v-model="ad.description" rows="3" id="description" required></textarea>
        </div>
      </div>
      <hr />

      <div class="form-group">
        <label for="price">Цена</label>
        <input type="number" v-model.trim.number="ad.price" class="form-control" id="price" placeholder="Цена" required />
      </div>

      <div class="form-group">
        <label for="name">Ваше Имя</label>
        <input type="text" v-model.trim="ad.name" class="form-control" id="name" placeholder="Ваше Имя" required />
      </div>

      <div class="form-group">
        <label for="phone">Телефоны (через запятую)</label>
        <input type="text" v-model.trim="ad.phone" class="form-control" id="phone" placeholder="Телефоны" required />
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" v-model.trim="ad.email" class="form-control" id="email" placeholder="E-mail" required />
      </div>

      <button :disabled="this.formSubmitted" class="btn btn-primary btn-block" type="submit">Submit</button>
    </form>
  </section>
</template>

<style scoped>
 #description {
   width: 100%;
   border-radius: 4px;
   border: 1px solid #ccc;
   box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
 }
</style>

<script>
  export default {
    fetch ({ store }) {
      return store.dispatch('category/list')
    },
    data() {
      return {
        ad: {
          title: '',
          address: '',

          category_id: '',
          description: '',

          price: '',
          name: '',
          phone: '',
          email: '',
        },
        parentCategoryId: '',

        formSubmitted: false
      }
    },
    computed: {
      parentCategories() { return this.$store.getters['category/parentCategories'] },
      subCategories() { return this.$store.state.category.list
        .filter(cat => cat.parent_id === this.parentCategoryId)
      },
      errors() {
        return this.$store.state.ad.errors
      },
    },
    methods: {
      validateBeforeSubmit(e) {
        if (this.formSubmitted) return;
        const data = {
          title: this.ad.title,
          address: this.ad.address,
          category_id: this.ad.category_id,
          description: this.ad.description,
          price: this.ad.price,
          name: this.ad.name,
          phone: this.ad.phone,
          email: this.ad.email,
        }
        this.submitForm(data);
      },
      submitForm(data) {
        this.formSubmitted = true
        this.$store.dispatch('ad/addNew', data)
          .then(() => {

          })
      }
    },
    head () {
      return {
        title: `Дать объявление в Украине - доска Objavlenie.net`,
      }
    }
  }
</script>

