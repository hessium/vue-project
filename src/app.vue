<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer";

</script>

<style lang="scss">
@import "styles/style.scss";
</style>
