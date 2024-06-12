<template>
  <section class="banner">
    <div class="container">
      <div class="banner__list">
        <div class="banner__item" >
          <h3>10K+</h3>
          <p>
            Satisfied Costumers<br/>All Great Over The World
          </p>
        </div>
        <div class="banner__item" >
          <h3>4M</h3>
          <p>
            Healthy Dishes Sold<br/>Including Milk Shakes Smooth
          </p>
        </div>
        <div class="banner__item" >
          <h3>99.99%</h3>
          <p>
            Reliable Customer Support<br/>We Provide Great Experiences
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.banner {
  background-image: url('/public/images/banner-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 49px 0;

  &__list {
    max-width: 942px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-inline: auto;
  }

  &__item {
    text-align: center;
    color: var(--color-white);
    padding: 0 54px;
    &:nth-child(2) {
      border-right: 1px solid rgba(197, 197, 197, .15);
      border-left: 1px solid rgba(197, 197, 197, .15);
    }
  }

  & h3 {
    font-size: 43px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  & p {
    font-size: 14px;
    font-weight: 500;
    color: rgba(197, 191, 237, 1);
  }
}


@media (max-width: 1290px) {
  .banner {
    &__list {
      max-width: 669px;
    }

    &__item {
      padding: 0 38px;
    }

    & h3 {
      font-size: 30px;
    }

    & p {
      font-size: 10px;
    }
  }
}

@media (max-width: 768px) {
    .banner {
      &__list {
        grid-template-columns: 1fr;
        max-width: 246px;
      }

      &__item {
        padding: 60px 0;
        &:nth-child(2) {
          border-right:none;
          border-left: none;
          border-top: 1px solid rgba(197, 197, 197, .15);
          border-bottom: 1px solid rgba(197, 197, 197, .15);
        }
      }

      & h3 {
        font-size: 43px;
      }

      & p {
        font-size: 14px;
      }
    }
}
</style>