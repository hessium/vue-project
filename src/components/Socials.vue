<template>
  <ul class="socials">
    <li>
      <a href="" target="_blank">
        <img src="/inst.svg" alt="inst">
      </a>
    </li>
    <li>
      <a href="" target="_blank">
        <img src="/in.svg" alt="inst">
      </a>
    </li>
    <li>
      <a href="" target="_blank">
        <img src="/facebook.svg" alt="inst">
      </a>
    </li>
    <li>
      <a href="" target="_blank">
        <img src="/twitter.svg" alt="inst">
      </a>
    </li>
  </ul>
</template>

<script setup>

</script>

<style scoped lang="scss">
.socials {
  display: flex;
  align-items: center;
  gap: 54px;
}

@media  (max-width: 768px) {
  .socials {
    gap: 20px;

    & li {


      & a {
        display: block;
        margin: -10px;
        padding: 10px;
      }

      & img {
        max-width: 15px;
        max-height: 15px;
      }
    }
  }
}
</style>