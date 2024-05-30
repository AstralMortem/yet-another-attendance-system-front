<script lang="ts" setup>
import type { RouteLocationRaw } from '#vue-router'

defineProps({
  to: {
    type: {} as PropType<RouteLocationRaw>,
  },
  icon: {
    type: String,
    default: 'i-heroicons-home',
  },
})
</script>

<template>
  <NuxtLink class="p-4 flex flex-row justify-start items-center hover:bg-gray-500 bg-gray-300 dark:bg-gray-900 gap-4 cursor-pointer text-lg" :to="$props.to" active-class="border-r-primary border-r-4 font-bold">
    <UIcon :name="$props.icon" :dynamic="true" size="1.5em" />
    <slot />
  </NuxtLink>
</template>

<style>

</style>
