<script lang="ts" setup>
import type { Group } from '~/types/db'

const props = defineProps({
  group: {
    type: {} as PropType<Group>,
  },
  background: {
    type: String,
    default: '/img/backgrounds/1.png',
  },
})
</script>

<template>
  <UCard :ui="{ header: { padding: ['p-0'] }, ring: ['hover:ring-4', 'ring-primary'] }" class="cursor-pointer">
    <template #header>
      <div>
        <img :src="$props.background" class="w-auto h-32 object-cover rounded-t-lg">
      </div>
    </template>
    <div class="flex flex-col w-fit h-fit">
      <p class="text-4xl">
        {{ $props.group?.title }}
      </p>
      <p class="text-xl">
        {{ $props.group?.place }}
      </p>
    </div>
  </UCard>
</template>

<style>

</style>
