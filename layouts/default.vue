<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'
import MyHeader from '~components/Header.vue'



export default {
  components: {
    MyFooter,
    MyHeader,
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  }
}
</script>

<style>
  h1, h2, h3, h4, h5, h6 {
    color: #424b5c;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 18px;
  }
</style>
