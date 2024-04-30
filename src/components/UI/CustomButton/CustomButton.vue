<script setup>
// eslint-disable-next-line no-undef
defineProps({
  text: {
    type: String,
    default: "",
  },
  btnColor: {
    type: String,
    default: "",
  },
  btnBackground: {
    type: String,
    default: "",
  },
  btnSize: {
    type: String,
    default: "",
  },
  btnRadius: {
    type: String,
    default: "",
  },
  btnPaddingVer: {
    type: String,
    default: "",
  },
  btnPaddingHor: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>

</style>

<template>
  <button :style="{
    color: btnColor || 'red',
    fontSize: btnSize + 'px' || '16px' ,
    borderRadius: btnRadius + 'px',
    paddingTop: btnPaddingVer + 'px',
    paddingBottom: btnPaddingVer + 'px',
    paddingLeft: btnPaddingHor + 'px',
    paddingRight: btnPaddingHor + 'px',
    background: btnBackground,
  }">
    {{text}}
  </button>
</template>