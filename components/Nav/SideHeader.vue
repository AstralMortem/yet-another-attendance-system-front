<script lang="ts" setup>
defineProps({
  title: {
    type: String,
  },
})

const links = useBreadcrumbItems()
const headerBadge = useHeaderBadge()

const { showCommandPanel } = useSearch()
</script>

<template>
  <div class="flex flex-col h-20 w-full p-4">
    <div class="flex flex-row w-full justify-between items-center">
      <div class="flex flex-row gap-2 items-center">
        <p class="text-4xl">
          {{ title ? title : $route.meta.title }}
        </p>
        <UBadge v-if="headerBadge > 0" :label="headerBadge" color="gray" variant="solid" />
      </div>
      <div class="flex flex-row justify-evenly gap-2">
        <UButton icon="i-heroicons-magnifying-glass" variant="ghost" color="gray" @click="showCommandPanel = true" />
        <UIDarkMode />
        <UILangSwitch />
      </div>
    </div>
    <div>
      <UBreadcrumb :links="links" />
    </div>
  </div>
</template>

<style>

</style>
