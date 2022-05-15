<template>
  <div id="app">
    <Header/>
    <HeaderTop/>
    <Product/>
    <OurProduct/>
  </div>
  
</template>

<script>

import Header from './components/Header.vue'
import Product from './components/Product.vue'
import HeaderTop from './components/HeaderTop.vue'
import OurProduct from './components/OurProduct.vue'

export default {
  name: 'App',
  components: {
    Header,
    Product,
    HeaderTop,
    OurProduct
    
  }
}
</script>

<style>

</style>
