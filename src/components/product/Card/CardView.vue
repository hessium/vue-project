<template>
  <CardSmall v-if="props.type === 'small'"/>
  <CardBig v-else-if="props.type === 'big'"/>
</template>

<script setup>
import CardSmall from '@/components/product/Card/CardSmall';
import CardBig from '@/components/product/Card/CardBig';
const props = defineProps(["type"])
</script>

<style scoped>

</style>