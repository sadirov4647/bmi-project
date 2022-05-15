<template>
  <div class="home">
    <HeaderTop />
    <OurProduct />
  </div>
</template>

<script>
import OurProduct from "../components/OurProduct.vue";
import HeaderTop from "../components/HeaderTop.vue";

export default {
  name: "HomeView",
  components: {
    HeaderTop,
    OurProduct,
  },
};
</script>
