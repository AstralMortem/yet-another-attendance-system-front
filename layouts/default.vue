<script lang="ts" setup>

</script>

<template>
  <div class="flex w-screen h-screen flex-row gap-4">
    <NavSideBar />
    <div class="flex flex-col w-full h-full gap-4">
      <NavSideHeader />
      <div class="w-full px-4">
        <slot />
      </div>
    </div>
    <UNotifications />
  </div>
</template>
