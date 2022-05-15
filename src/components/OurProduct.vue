<template>
      <section id="products">
      <div class="container">
          <div class="title">Our Products</div>
          <div class="variants">
              <router-link to="/arrivals" class="active">NEW ARRIVALS</router-link>
              <router-link to="/natural">ORGANIC & NATURAL</router-link>
              <router-link to="/story">THE FARM STORY</router-link>
              <router-link to="/cake">PLUM CAKE</router-link>
          </div>
          <router-view></router-view>
      </div>
  </section>


</template>

<script>
export default {
    name: "OurProduct",
}
</script>

<style>

</style>