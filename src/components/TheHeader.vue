<template>
  <header class="header">
    <div class="header-container">
      <div class="header__item">
        <a href="/" class="header__logo">
          <img src="@/assets/images/logo.svg" alt="">
          <span class="header__logo--animate">eatly</span>
        </a>
        <TheNavigation/>
      </div>
      <div class="header__actions">
        <routerlink class="header__link  header__link--transparent"  to="/login">Login</routerlink>
        <routerlink class="btn"   to="/sign">Sign up</routerlink>
      </div>
    </div>
  </header>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation";

</script>
<style lang="scss">
@import "../styles/header.scss";
</style>