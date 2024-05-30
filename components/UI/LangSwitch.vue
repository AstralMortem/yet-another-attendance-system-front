<script setup>
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
function changeLocale(locale) {
  setLocale(locale)
  useRouter().push(switchLocalePath(locale))
}
const model = ref(locale)
</script>

<template>
  <div class="flex flex-row gap-2 justify-start items-center">
    <UIcon name="i-heroicons-language" class="w-6 h-6" />
    <USelectMenu
      v-model="model"
      :options="locales"
      option-attribute="name"
      value-attribute="code"
      @change="changeLocale(model)"
    />
  </div>
</template>
