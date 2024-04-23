<script >
export default {
  name: "TheNavigation",
  data() {
    const links = [
      { name: "Menu", path: '/menu'},
      { name: "Blog", path: '/blog'},
      { name: "Pricing", path: '/pricing'},
      { name: "Contact", path: '/contact'},
      ];
    return {
      links
    }
  }
}
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
  }

  .link:hover {
    color: var(--color-prime);
  }
</style>