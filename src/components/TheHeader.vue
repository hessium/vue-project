<template>
  <header class="header">
    <div class="container">
      <div class="header-container">
        <a href="/" class="header__logo">
          <img src="/logo.svg" alt="">
          <span class="header__logo--animate">eatly</span>
        </a>
        <transition name="fade">
          <div v-show="menuOpen" class="header-menu">
            <TheNavigation/>
            <div class="header__actions">
              <routerlink class="header__link"  to="/login">Login</routerlink>
              <routerlink class="btn"  to="/sign">Sign up</routerlink>
            </div>
          </div>
        </transition>
        <button
            v-show="buttonShow"
            class="header-burger"
            :class="{ open: menuOpen }"
            @click="openMenu">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation";
import {ref, watch} from "vue";

const  menuOpen =  ref('');
const  buttonShow =  ref('');
const openMenu = () => {
  menuOpen.value = !menuOpen.value;
  if( menuOpen.value === true) {
    document.querySelector('html').classList.add('lock-scroll')
  } else {
    document.querySelector('html').classList.remove('lock-scroll')
  }
}
const getWindowWidth = () => {
  menuOpen.value = window.innerWidth >= 768;
  buttonShow.value = window.innerWidth < 768;
}
getWindowWidth()
watch(() => {
  window.addEventListener("resize", getWindowWidth);
})

</script>
<style lang="scss">
@import "../styles/header.scss";
</style>