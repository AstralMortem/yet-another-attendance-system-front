<script lang="ts" setup>

</script>

<template>
  <div class="flex w-screen h-screen flex-row gap-4">
    <NavSideBar />
    <div class="flex flex-col w-full h-full gap-4">
      <NavSideHeader />
      <div class="flex w-full overflow-y-auto justify-start items-start">
        <slot />
      </div>
    </div>
  </div>
</template>
