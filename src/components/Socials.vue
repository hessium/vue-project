<template>
  <ul class="socials">
    <li>
      <a href="" target="_blank">
        <img src="/images/icons/inst.svg" alt="inst">
      </a>
    </li>
    <li>
      <a href="" target="_blank">
        <img src="/images/icons/in.svg" alt="inst">
      </a>
    </li>
    <li>
      <a href="" target="_blank">
        <img src="/images/icons/facebook.svg" alt="inst">
      </a>
    </li>
    <li>
      <a href="" target="_blank">
        <img src="/images/icons/twitter.svg" alt="inst">
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

@media  (max-width: 768px) {
  .socials {
    gap: 20px;
  }
}
</style>