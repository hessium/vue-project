<script setup>
import {defineProps} from 'vue';

defineProps({
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

<template>
  <button :style="{
    color: btnColor || 'red',
    fontSize: btnSize + 'px',
    borderRadius: btnRadius + 'px',
    paddingTop: btnPaddingVer + 'px',
    paddingBottom: btnPaddingVer + 'px',
    paddingLeft: btnPaddingHor + 'px',
    paddingRight: btnPaddingHor + 'px',
    background: btnBackground,
  }">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>