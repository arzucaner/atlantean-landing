<template>
  <section class="offer" role="region" aria-labelledby="offer-title">
    <div class="container">
      <h2 id="offer-title" class="offer__title">Claim 200 Free Spins on Atlantean Treasures: Mega Moolah!</h2>
      <ul class="offer__details" role="list">
        <li v-for="(detail, index) in details" :key="index" class="detail-item" role="listitem">
          <component :is="detail.icon" class="detail-icon" aria-hidden="true" />
          <strong>{{ detail.label }}:</strong> {{ detail.value }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DollarSign, Gift, Coins, Timer, Gamepad2, Repeat2, Gauge } from 'lucide-vue-next'

const details = [
  { label: 'Game', value: 'Atlantean Treasures: Mega Moolah', icon: Gamepad2 },
  { label: 'Free Spins', value: '200', icon: Gift },
  { label: 'Minimum Deposit', value: '$10', icon: DollarSign },
  { label: 'Spin Value', value: '$0.10', icon: Coins },
  { label: 'Wagering Requirement', value: '35x', icon: Repeat2 },
  { label: 'Offer Expiry', value: '7 days from sign-up', icon: Timer },
  { label: 'Volatility', value: 'Medium', icon: Gauge }
]
</script>

<style scoped lang="scss">
.offer {
  background: var(--gradient-ocean);
  color: var(--primary-text);
  padding: var(--spacing-xl) var(--spacing-md);

  &__title {
    text-align: center;
    margin-bottom: var(--spacing-lg);
    font-size: 1.75rem;
    font-weight: bold;
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: var(--breakpoint-mobile)) {
      font-size: 1.4rem;
    }
  }

  &__details {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.6;
    list-style: none;
    padding: 0;

    @media (max-width: var(--breakpoint-mobile)) {
      font-size: 0.95rem;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-sm);

      .detail-icon {
        color: var(--gold-primary);
        width: 20px;
        height: 20px;

        @media (max-width: var(--breakpoint-mobile)) {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>

