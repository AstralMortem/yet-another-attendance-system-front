export function useSearch() {
  const showCommandPanel = ref(false)
  const modelCommandPanel = ref([])
  return { showCommandPanel, modelCommandPanel }
}
