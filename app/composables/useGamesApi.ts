export const useGamesApi = () => {
  const games = ref<Array<{
    id: number
    title: string
    description: string
    image: string
  }> | null>(null)

  const pending = ref(true)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      const { data } = await useFetch('/api/games')
      games.value = data.value || null
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'Unknown error occurred'
    } finally {
      pending.value = false
    }
  })

  return { games, pending, error }
} 