<template>
  <section class="reviews">
    <swiper
          :pagination="{type: 'progressbar'}"
          :spaceBetween="20"
          :watchSlidesProgress="true"
          :slidesPerView="1"
          :centeredSlides="true"
          :breakpoints="{
            '768': {
                centeredSlides: false,
                spaceBetween: 46,
                slidesPerView: 'auto',
            }
          }"
          :modules="modules"
          class="reviews-list"

      >
        <swiper-slide class="reviews-item"  v-for="item in allComments" :key="item.id">
          <div class="reviews-item__header">
            <img src="/images/avatar.png" alt="">
            <div class="reviews-item__text">
              <h3>{{item.email}}</h3>
              <div class="reviews-item__date">{{item.name}}</div>
            </div>
          </div>
          <p>{{item.body}}</p>
          <star-rating v-model:rating="item.id" :star-size="16"/>
        </swiper-slide>
      </swiper>
  </section>
</template>

<script setup>
import {computed, onMounted} from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import StarRating from 'vue-star-rating';
import {useStore} from "vuex";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const store = useStore();

const modules = [Pagination, Navigation]

const allComments = computed(() => store.getters.allComments);
onMounted(async () =>  {
  await store.dispatch('fetchComments')
})

</script>

<style lang="scss">
@import "../styles/reviews.scss";

</style>