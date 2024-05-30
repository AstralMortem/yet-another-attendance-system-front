<script lang="ts" setup>
import type { RouteLocationRaw } from '#vue-router'

defineProps({
  to: {
    type: [String, {} as PropType<RouteLocationRaw>],
  },
  icon: {
    type: String,
    default: 'i-heroicons-home',
  },
})

const localeRoute = useLocaleRoute()
</script>

<template>
  <ULink
    class="p-4 flex flex-row justify-start items-center hover:bg-gray-200 hover:dark:bg-gray-600 bg-gray-50 dark:bg-gray-900 gap-4 cursor-pointer text-lg"
    :to="localeRoute($props.to)" active-class="border-r-primary border-r-4 font-bold text-primary"
  >
    <UIcon :name="$props.icon" :dynamic="true" size="1.5em" />
    <slot />
  </Ulink>
</template>

<style>

</style>
