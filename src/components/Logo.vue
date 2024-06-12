<template>
  <RouterLink to="/" class="logo">
    <img src="/images/icons/logo.svg" alt="">
    <span class="logo--animate">eatly</span>
  </RouterLink>
</template>

<script setup>

</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-right: 76px;
  font-size: 21px;
  line-height: 1.3;
  font-weight: 600;
  color: var(--color-prime);
  max-width: 112px;

  & img {
    overflow: visible;
    width: 100%;
    max-width: 46px;
  }

  &:hover {
    & .logo--animate {
      animation: logoAnimate 1.5s infinite;
    }
  }
}

@media (max-width: 1290px) {
  .logo {
    gap:8px;
    margin-right: 56px;
    max-width: 79px;
    font-size: 15px;

    & img {
      max-width: 33px;
    }
  }
}

@media (max-width: 768px) {
  .logo {
    font-size: 21px;
    gap: 11px;
    & img {
      max-width: 46px;
    }
  }
}
</style>