<script setup lang="ts">
const { data: games, pending, error } = await useFetch('/api/games')
</script>

<template>
  <section class="game-list" role="region" aria-labelledby="games-title">
    <div class="container">
      <div class="game-list__info">
        <div class="trident-icon" aria-hidden="true">       
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2V22M12 2L9 5M12 2L15 5M9 8H15" stroke="var(--gold-primary)" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>

        <h2 id="games-title" class="fancy-title">Featured Games</h2>

        <p>
          Explore the deep-sea mysteries and uncover the lost treasures of Atlantis. <br />
          Riches await those brave enough to dive in.
        </p>
      </div>

      <div v-if="pending" class="loading" role="status" aria-live="polite">Loading games...</div>
      <div v-else-if="error" class="error" role="alert" aria-live="assertive">Failed to load games.</div>

      <div v-else class="game-list__cards" role="list">
        <div
          v-for="(game, index) in games"
          :key="game.id"
          class="game-card"
          :class="index % 2 === 0 ? 'left' : 'right'"
          role="listitem"
        >
          <img :src="game.image" :alt="`${game.title} game preview`" />
          <h3>{{ game.title }}</h3>
          <p class="game-description">{{ game.description }}</p>
          <button class="btn btn--primary btn--sm" :aria-label="`Play ${game.title} now`">Play Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.game-list {
  padding: var(--spacing-4xl) var(--spacing-md);
  background-color: var(--card-bg-alt);
  color: var(--text-lighter);

  &__info {
    max-width: 720px;
    margin: 0 auto var(--spacing-3xl);
    text-align: center;
    position: relative;

    .trident-icon {
      margin-bottom: var(--spacing-md);

      svg {
        width: 28px;
        height: 28px;
        filter: drop-shadow(var(--shadow-gold));
      }
    }

    .fancy-title {
      font-size: 2rem;
      font-weight: 800;
      background: var(--gradient-gold-alt);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: var(--spacing-md);
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
        width: 80px;
        height: 4px;
        background: var(--gradient-gold-alt);
        border-radius: 2px;
        opacity: 0.6;
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--text-lighter);
    }
  }

  &__cards {
    display: grid;
    gap: var(--spacing-xl);
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    justify-content: center;
  }
}

.game-card {
  background: var(--card-bg);
  padding: var(--spacing-lg) var(--spacing-md);
  border-radius: var(--radius-xl);
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  box-shadow: var(--shadow-medium);
  transition: transform var(--transition-normal) ease;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-md);
  }

  h3 {
    font-size: 1rem;
    color: var(--white);
    margin-bottom: var(--spacing-sm);
  }

  .game-description {
    font-size: 0.9rem;
    color: var(--text-light);
    margin-bottom: var(--spacing-md);
    line-height: 1.4;
  }

  button {
    margin-top: var(--spacing-xs);
  }

  &:hover {
    transform: translateY(-5px);
  }
}

.loading, .error {
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--text-light);
}
</style>