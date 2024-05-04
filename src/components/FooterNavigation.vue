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
  gap: 70px;
}

.link {
  padding: 0;
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
  nav {
    gap: 50px;
  }
  .link {
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .link {
    text-align: left;
    text-transform: uppercase;
    font-size: 14px;
  }
}
</style>