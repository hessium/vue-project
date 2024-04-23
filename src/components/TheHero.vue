<template>
  <div class="hero container">
    <div class="hero-left__block">
      <div class="hero-left__users">
        <div class="hero-count">
          <span class="hero-count__line"></span> {{data.usersCount}} users
        </div>
        <h1>
          Enjoy Foods All Over The <span class="purple">World</span>
        </h1>
        <div class="hero__desc">
          EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span class="purple">$20 bonus</span>.
        </div>
        <div class="hero__btns">
          <a href="#" class="btn hero__btn ">
            Get Started
          </a>
          <a href="#" class="btn btn-white hero__btn">
            Go Pro
          </a>
        </div>
      </div>
    </div>
    <div class="hero-right__block">
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// eslint-disable-next-line no-unused-vars
const data  = reactive({
  title: '',
  desc: '',
  usersCount: '1000',

})
</script>

<style lang="scss">
@import "../styles/hero.scss";
</style>