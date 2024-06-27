<template>
  <div class="slider">
     <Splide :options="options">
       <SplideSlide>
         <div class="slider__item">
           <h2>50% OFF<br><span>WEEKENDS</span></h2>
           <div class="slider__img">
             <img src="/images/product/card-1.png" alt="">
           </div>
         </div>
       </SplideSlide>
       <SplideSlide>
         <div class="slider__item">
           <h2>30% OFF<br><span>WEEKENDS</span></h2>
           <div class="slider__img">
             <img src="/images/product/card-2.png" alt="">
           </div>
         </div>
       </SplideSlide>
       <SplideSlide>
         <div class="slider__item">
           <h2>20% OFF<br><span>WEEKENDS</span></h2>
           <div class="slider__img">
             <img src="/images/product/card-3.png" alt="">
           </div>
         </div>
       </SplideSlide>
     </Splide>
   </div>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

import '@splidejs/vue-splide/css/core';
const options = {
  rewind: true,
  arrows: false,
  gap: "10rem",
};

</script>

<style lang="scss">
@import "../styles/slider";
</style>