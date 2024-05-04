<script setup>
const links = [
  { name: "Menu", path: '/menu'},
  { name: "Blog", path: '/blog'},
  { name: "Pricing", path: '/pricing'},
  { name: "Contact", path: '/contacts'},
];

</script>
<template>
  <nav>
    <RouterLink class="link" v-for="link in links" :key="link.name" :to="link.path">{{link.name}}</RouterLink>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    align-items: center;
  }

  .link {
    padding: 0 27px;
    cursor: pointer;
    transition: color .3s linear;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
  }

  .link:hover {
    color: var(--color-prime);
  }

  @media (max-width: 1224px) {
    .link {
      padding: 0 17px;
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      gap: 15px;
      margin-bottom: 20px;
    }
  }
</style>