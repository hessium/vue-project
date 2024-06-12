<template>
  <article class="card-big card">
    <div class="card-big__img card__img">
      <img :src="item.img" alt="">
    </div>
    <div class="card__body card-big__body">
      <div class="card__tag" :class="item.tag">{{item.tag}}</div>
      <h3>{{item.name}}</h3>
      <div class="card__tools card-big__tools">
        <span class="card__time">{{item.time}} • </span>
        <div class="card__rating">
          <img src="/images/product/star.svg" alt=""><span>{{item.rating}}</span>
        </div>
        <button
            type="button"
            class="card-big__add"
        >
          <svg>
            <use xlink:href="/images/icons/sprite.svg#bookmark"></use>
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
const {item} = defineProps({
  item: Object
})
</script>

<style scoped lang="scss">
@import "../../../styles/card";
</style>