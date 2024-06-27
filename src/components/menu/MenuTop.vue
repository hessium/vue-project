<template>
  <section>
    <div class="container">
      <div class="menu-top">
        <div class="menu-slider">
            <Slider/>
        </div>
        <div class="menu-search">
            <Search/>
        </div>
        <div class="menu-category">
          <Filter/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Slider from "@/components/Slider";
import Search from "@/components/Search";
import Filter from "@/components/Filter";
</script>

<style scoped lang="scss">
.menu-top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 113px;
  grid-row-gap:0;
}
.menu-slider {
  grid-area: 1 / 1 / 3 / 3;
}
.menu-search {
  grid-area: 3 / 1 / 4 / 3;
}
.menu-category {
  grid-area: 1 / 3 / 4 / 4;
}

@media (max-width: 1400px) {
  .menu-top {
    grid-column-gap: 80px;
  }
}

@media (max-width: 1200px) {

  .menu-top {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .menu-slider {
    grid-area: 1 / 1 / 3 / 4;
  }
  .menu-search {
    grid-area: 3 / 1 / 4 / 4;
  }
  .menu-category {
    grid-area: 1 / 4 / 4 / 5
  }

}

@media (max-width: 920px) {
  .menu-top {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .menu-search {
    order: 2;
  }
}
</style>