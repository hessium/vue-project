<template>
  <Hero />
  <Banner/>
  <Quality/>
  <ListView :listBig="dataBig" :type="'big'" :title="'Restaurants'" :home="true"/>
  <ListView :listSmall="dataSmall" :type="'small'" :title="'Dishes'" :home="true"/>

  <Reviews/>
</template>

<script setup>
import {reactive} from "vue";

import Hero from "@/components/home/Hero.vue";
import Banner from "@/components/home/Banner";
import Reviews from "@/components/Reviews";
import ListView from "@/components/product/List/ListView";
import Quality from "@/components/home/Quality";


const dataSmall = reactive([
     {
       "id": 1,
       "name": "Chicken Hell",
       "tag" : "healthy",
       "price": "12",
       "priceCent" : "99",
       "time" : "24min",
       "img" : "/images/product/card-1.png",
       "rating" : "4.8"
     },
     {
       "id": 2,
       "name": "Swe Dish",
       "tag" : "trending",
       "price": "19",
       "priceCent" : "99",
       "time" : "24min",
       "img" : "/images/product/card-2.png",
       "rating" : "4.9"
     },
     {
       "id": 3,
       "name": "Swe Dish",
       "tag" : "supreme",
       "price": "19",
       "priceCent" : "99",
       "time" : "24min",
       "img" : "/images/product/card-3.png",
       "rating" : "4.9"
     },
     {
       "id": 4,
       "name": "Chicken Hell",
       "tag" : "healthy",
       "price": "12",
       "priceCent" : "99",
       "time" : "24min",
       "img" : "/images/product/card-1.png",
       "rating" : "4.8"
     },
     {
       "id": 5,
       "name": "Swe Dish",
       "tag" : "trending",
       "price": "19",
       "priceCent" : "99",
       "time" : "24min",
       "img" : "/images/product/card-2.png",
       "rating" : "4.9"
     },
   ])

const dataBig = reactive([
      {
        "id": 1,
        "name": "Chicken Hell",
        "tag" : "healthy",
        "price": "12",
        "priceCent" : "99",
        "time" : "24min",
        "img" : "/images/product/big-card-1.jpg",
        "rating" : "4.8"
      },
      {
        "id": 2,
        "name": "Swe Dish",
        "tag" : "trending",
        "price": "19",
        "priceCent" : "99",
        "time" : "24min",
        "img" : "/images/product/big-card-2.jpg",
        "rating" : "4.9"
      },
      {
        "id": 3,
        "name": "Swe Dish",
        "tag" : "supreme",
        "price": "19",
        "priceCent" : "99",
        "time" : "24min",
        "img" : "/images/product/big-card-3.jpg",
        "rating" : "4.9"
      },
    ])

</script>

<style scoped>
</style>