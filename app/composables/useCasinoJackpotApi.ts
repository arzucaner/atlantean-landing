import { ref, onMounted } from 'vue'

export const useCasinoJackpotApi = () => {
  const jackpotAmount = ref<string | null>(null)
  const pending = ref(true)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      const res = await fetch('/api/jackpot')
      if (!res.ok) throw new Error('Failed to fetch jackpot')
      const data = await res.json()
      if (data && typeof data.jackpot_amount === 'number' && typeof data.currency_code === 'string') {
        jackpotAmount.value = data.jackpot_amount.toLocaleString('en-US', { style: 'currency', currency: data.currency_code, maximumFractionDigits: 0 })
      } else {
        error.value = data.error || 'Jackpot not found'
        jackpotAmount.value = null
      }
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'Unknown error occurred'
    } finally {
      pending.value = false
    }
  })

  return { jackpotAmount, pending, error }
}

