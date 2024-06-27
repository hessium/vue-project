<template>
  <div class="filter">
    <h3>Category</h3>
    <ul class="filter-change">
      <li class="filter-change__item"  v-for="category in categoryList" :class="category.selected ? 'active' : ''"  :key="category.name" @click="onSelectedCat(category.id)">
        <div class="filter-change__body">
          <div class="filter-change__img">
            <img :src="category.icon" alt="">
          </div>
          <span>{{ category.name }}</span>
        </div>
      </li>
    </ul>

    <h3>Sort By</h3>
    <div class="filter-sort">
      <div class="filter-sort__col">
        <span>Recomended</span>
        <span>Most Popular</span>
      </div>
      <div class="filter-sort__delivery">Fast Delivery</div>
    </div>

    <div class="filter-price">
      <h3>Price</h3>
      <input type="range" min="0"  max="1000" step="20">
      <div></div>
    </div>
  </div>

</template>

<script setup>
import {useStore} from "vuex";

const store = useStore();
import {computed, onMounted, } from "vue";

const categoryList = computed(() => store.getters.allCategories);
onMounted(async () =>  {
  await store.dispatch('fetchCategories')
})

const onSelectedCat = (id) => {
  store.commit('selectedCat', id);
}
</script>

<style scoped lang="scss">
@import "../styles/filter.scss";
</style>