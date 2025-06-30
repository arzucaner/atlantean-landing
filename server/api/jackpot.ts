import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const res = await fetch('https://jackpots.desdev.co')
  if (!res.ok) {
    return { error: 'Failed to fetch jackpots' }
  }
  const jackpots = await res.json()
  if (!Array.isArray(jackpots)) {
    return { error: 'Invalid jackpot data' }
  }
  const gameJackpot = jackpots.find(j => j.friendly_name === 'Atlantean Treasures: Mega Moolah')
  if (gameJackpot && typeof gameJackpot.jackpot_amount === 'number' && typeof gameJackpot.currency_code === 'string') {
    return {
      jackpot_amount: gameJackpot.jackpot_amount,
      currency_code: gameJackpot.currency_code
    }
  } else {
    return { error: 'Jackpot not found' }
  }
}) 