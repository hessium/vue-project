<template>
  <div class="container">
   <section class="hero">
     <div class="hero__block">
       <div class="hero-count">
         <span class="hero-count__line"></span> {{data.usersCount}} users
       </div>
       <h1>
         Enjoy Foods Over <span class="purple">World</span>
       </h1>
       <div class="hero__desc">
         EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span class="purple">$20 bonus</span>.
       </div>
       <div class="hero__actions">
         <RouterLink to="/login" class="btn hero__btn ">
           Get Started
         </RouterLink>
         <RouterLink to="/sign" class="btn btn-white hero__btn">
           Go Pro
         </RouterLink>
       </div>
       <div class="hero-review">
         <div class="hero-reviews__logo">
           <img src="/hero/trust-icon.svg" alt="">
         </div>
        <div class="hero-review__list">
          <star-rating v-model:rating="data.stars" star-size="16" />
          <span>{{data.review}}+</span>
        </div>
       </div>
     </div>
     <div class="hero-wrap">
       <div class="hero-wrap__bg">
         <img src="/hero/food.png" alt="food">
       </div>
       <div class="hero-wrap__content">
         <div class="hero-item">
           <div class="hero-item__img">
             <img src="/hero/food-small.png" alt="food">
           </div>
           <div class="hero-item__text">
             <div class="hero-item__name">Chicken Hell</div>
             <span>On The Way</span>
           </div>
           <div class="hero-item__date">
             3:09 PM
           </div>
         </div>
         <div class="hero-graph">
           <img src="/hero/graph.png" alt="graph">
         </div>
       </div>
     </div>
   </section>
  </div>
</template>

<script setup>
import {reactive} from 'vue';
import StarRating from 'vue-star-rating';

const data  = reactive({
  title: '',
  desc: '',
  usersCount: '1000',
  stars: 4,
  review: '4900'
})

</script>

<style lang="scss">
@import "../../styles/hero";
</style>