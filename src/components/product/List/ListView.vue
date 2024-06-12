<template>
  <ListSmall :list="listSmall" v-if="props.type === 'small'" :title="title" :home="home"/>
  <ListBig :list="listBig"  v-else-if="props.type === 'big'" :title="props.title" :home="home"/>
</template>

<script setup>
import ListSmall from '@/components/product/List/ListSmall';
import ListBig from '@/components/product/List/ListBig';
const props = defineProps(
    {
      title: String,
      home: Boolean,
      type: String,
      listSmall: Object,
      listBig: Object,
    }
)
</script>

<style scoped>

</style>