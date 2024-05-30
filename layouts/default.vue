<script lang="ts" setup>

</script>

<template>
  <div class="flex w-screen h-screen flex-row">
    <NavSideBar />
    <div class="flex flex-col w-full h-full">
      <NavSideHeader />
      <div class="flex w-full h-full overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
