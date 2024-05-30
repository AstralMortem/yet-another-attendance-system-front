<script lang="ts" setup>
const links = [{
  title: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  title: 'Groups',
  icon: 'i-heroicons-users',
  to: '/groups',
}]

const items = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true,
  }],
  [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth',
  }],
  [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open',
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone',
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal',
  }],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
  }],
]
</script>

<template>
  <div class="flex h-full w-80 flex-col bg-white dark:bg-gray-900 rounded-e-xl shadow-md">
    <div class="flex flex-col justify-center items-center h-40">
      <UILogo />
    </div>
    <div class="flex flex-col gap-4 flex-1">
      <NavLink v-for="link in links" :key="link.title" :icon="link.icon" :to="link.to">
        {{ link.title }}
      </NavLink>
    </div>
    <div class="flex flex-row h-20 justify-center items-center border-t">
      <UDropdown :items="items">
        <div class="flex flex-row justify-evenly gap-4 p-4">
          <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
          <p class="text-xl">
            Vladyslav Chaliuk
          </p>
        </div>
        <template #item="{ item }">
          <span class="truncate">{{ item.label }}</span>
          <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
        </template>
      </UDropdown>
    </div>
  </div>
</template>

<style>

</style>
