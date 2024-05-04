<template>
  <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-top__block">
            <Logo/>
            <Socials/>
          </div>
          <FooterNavigation/>
        </div>
        <div class="footer-bottom">
          <p class="footer-license">© 2023 EATLY All Rights Reserved.</p>
          <Socials/>
        </div>
      </div>
  </footer>
</template>

<script setup>
import FooterNavigation from "@/components/FooterNavigation";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
</script>

<style scoped lang="scss">
@import "../styles/footer.scss";
</style>