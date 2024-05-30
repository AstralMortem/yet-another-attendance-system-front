<script lang="ts" setup>
const groups = [{
  title: 'String',
  place: 'Morozivka',
},{
  title: 'String',
  place: 'Morozivka',
},{
  title: 'String',
  place: 'Morozivka',
}]
</script>

<template>
  <div class="flex flex-row flex-wrap gap-6">
    <GroupCard v-for="group in groups" :group="group" />
  </div>
</template>

<style>

</style>
