<script setup lang="ts">
const { jackpotAmount, pending, error } = useCasinoJackpotApi()

const lastWinner = computed(() => {
  const winner = null // jackpot?.value?.lastWinner (not available in current API)
  if (!winner) return null
  return `Last winner: ${winner.name} won $${winner.amount} on ${winner.date}`
})
</script>

<template>
  <section class="jackpot-banner" role="region" aria-labelledby="jackpot-title">
    <div class="container">
      <div v-if="pending" role="status" aria-live="polite">Loading jackpot...</div>
      <div v-else-if="error" role="alert" aria-live="assertive">Jackpot unavailable</div>
      <div v-else class="jackpot-info">
        <h2 id="jackpot-title" class="jackpot-title">Current Jackpot</h2>
        <p class="amount" aria-label="Current jackpot amount">{{ jackpotAmount }}</p>
        <p class="winner" v-if="lastWinner" aria-label="Last winner information">{{ lastWinner }}</p>
      </div>
    </div>
  </section>

  <div class="wave-separator" aria-hidden="true">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.jackpot-banner {
  background: var(--gradient-ocean);
  color: var(--white);
  padding: var(--spacing-xl) var(--spacing-md);
  text-align: center;

  .jackpot-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: var(--spacing-md);
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: var(--breakpoint-mobile)) {
      font-size: 1.5rem;
    }
  }

  .amount {
    font-size: 2.25rem;
    font-weight: bold;
    margin: var(--spacing-md) 0;
    color: var(--gold-primary);

    @media (max-width: var(--breakpoint-mobile)) {
      font-size: 1.75rem;
    }
  }

  .winner {
    font-size: 1rem;
    color: var(--text-light);

    @media (max-width: var(--breakpoint-mobile)) {
      font-size: 0.85rem;
    }
  }
}

.wave-separator {
  position: relative;
  height: 60px;
  overflow: hidden;
  line-height: 0;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    animation: waveMove var(--animation-duration) linear infinite;

    path {
      fill: var(--tertiary-accent);
    }
  }
}

@keyframes waveMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>




