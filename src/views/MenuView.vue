<template>
  <MenuTop />
  <ListView :listBig="dataBig" :type="'big'" :title="'Restaurants'" :home="allLinks"/>
  <ListView :listSmall="dataSmall" :type="'small'" :title="'Dishes'" :home="allLinks"/>
</template>

<script setup>
import {reactive, ref, watchEffect} from "vue";
import MenuTop from "@/components/menu/MenuTop";
import ListView from "@/components/product/List/ListView";

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

const allLinks =  ref('');

const getWindowWidth = () => {
  allLinks.value = window.innerWidth <= 768;
}

getWindowWidth()
watchEffect(() => {
  window.addEventListener("resize", getWindowWidth);
})

</script>

<style scoped>
</style>