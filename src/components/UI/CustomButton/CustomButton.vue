<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
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
    color: props.btnColor || 'red',
    fontSize: props.btnSize + 'px' || '16px' ,
    borderRadius: props.btnRadius + 'px',
    paddingTop: props.btnPaddingVer + 'px',
    paddingBottom: props.btnPaddingVer + 'px',
    paddingLeft: props.btnPaddingHor + 'px',
    paddingRight: props.btnPaddingHor + 'px',
    background: props.btnBackground,
  }">
    {{text}}
  </button>
</template>