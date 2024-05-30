<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Screen',
  },
  badge: {
    type: Number,
  },
})

const { showCommandPanel } = useSearch()
</script>

<template>
  <div class="flex flex-col h-40 w-full p-4">
    <div class="flex flex-row w-full justify-between items-center">
      <div class="flex flex-row gap-2">
        <p class="text-4xl">
          {{ $props.title }}
        </p>
        <UBadge v-if="$props.badge" :label="$props.badge" color="gray" variant="solid" />
      </div>
      <div class="flex flex-row justify-evenly gap-2">
        <UButton icon="i-heroicons-magnifying-glass" variant="ghost" color="gray" @click="showCommandPanel = true" />
        <UIDarkMode />
      </div>
    </div>
    <div>
      pass
    </div>
  </div>
</template>

<style>

</style>
