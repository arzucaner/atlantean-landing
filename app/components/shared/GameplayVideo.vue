<template>
  <section class="video" role="region" aria-labelledby="video-title">
    <div class="container video__layout">     
      <div class="video__text">
        <div class="video__icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="gold">
            <path d="M32 0l5 12h-4v18h6v6h-6v28h-4V36h-6v-6h6V12h-4l5-12zM16 18l4 6-4 6-4-6 4-6zm32 0l4 6-4 6-4-6 4-6z"/>
          </svg>
        </div>
        <h2 id="video-title">Watch the Gameplay</h2>
        <p>Experience the magic of Atlantean Treasures and dive into legendary wins beneath the waves.</p>
      </div>     
      <video
        controls
        autoplay
        muted
        loop
        playsinline
        class="video__player"
        aria-label="Atlantean Treasures gameplay video"
      >
        <source src="/atlanteantreasures.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
</template>

<style scoped lang="scss">
.video {
  background-color: var(--black);
  padding: var(--spacing-3xl) var(--spacing-md);
  color: var(--primary-text);

  &__layout {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
    align-items: center;
    justify-content: center;

    @media (min-width: var(--breakpoint-mobile)) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__text {
    max-width: 420px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);

    @media (min-width: var(--breakpoint-mobile)) {
      text-align: left;
    }

    h2 {
      font-size: 2rem;
      font-family: 'Cinzel Decorative', serif;
      background: var(--gradient-gold-alt);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--text-light);
    }
  }

  &__icon {
    width: 48px;
    height: 48px;
    margin: 0 auto;

    @media (min-width: var(--breakpoint-mobile)) {
      margin: 0;
    }

    svg {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0 0 6px gold);
    }
  }

  &__player {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-heavy);
  }
}
</style>