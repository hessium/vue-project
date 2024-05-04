<template>
  <header class="header">
    <div class="container">
      <div class="header-container">
        <Logo/>
        <transition name="fade">
          <div v-show="menuOpen" class="header-menu">
            <HeaderNavigation/>
            <div class="header__actions">
              <RouterLink class="header__link"  to="/login">Login</RouterLink>
              <RouterLink class="btn"  to="/sign">Sign up</RouterLink>
            </div>
          </div>
        </transition>
        <button
            type="button"
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
import Logo from "@/components/Logo";
import HeaderNavigation from "@/components/HeaderNavigation";
import { RouterLink } from 'vue-router'
import {ref, watchEffect} from "vue";

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
watchEffect(() => {
  window.addEventListener("resize", getWindowWidth);
})

</script>
<style lang="scss">
@import "../styles/header.scss";
</style>