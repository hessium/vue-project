<template>
  <section class="products products-big">
    <div class="container">
      <div class="padding-bottom products__wrap">
        <div class="products__header">
          <h2>
            Our Top <span>{{props.title}}</span>
          </h2>
          <a href="#" v-show="!props.home" class="products__all">
            <span>View All</span>
            <svg>
              <use xlink:href="/images/icons/sprite.svg#arrow"></use>
            </svg>
          </a>
        </div>
        <div class="products__list products-big__list">
          <CardView type="big" :item="item"  v-for="item in list" :key="item.id"/>
        </div>
        <a href="#" v-show="props.home" class="products__all">
          <span>View All</span>
          <svg>
            <use xlink:href="/images/icons/sprite.svg#arrow"></use>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardView from "@/components/product/Card/CardView";
const props = defineProps({
  title: String,
  home: Boolean,
  list: Object
});

</script>

<style scoped lang="scss">
@import "../../../styles/products.scss";
</style>