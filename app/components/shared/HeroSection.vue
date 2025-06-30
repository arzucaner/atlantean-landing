<script setup lang="ts">
// No jackpot logic here
</script>

<template>
  <section class="hero" role="banner" aria-labelledby="hero-title">
    <video
      class="hero__bg"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    >
      <source src="/img/mermaid-hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="hero__content">
      <img src="/img/atlantean_treasures_logo.png" alt="Atlantean Treasures Game Logo" class="hero__logo" />
      <h1 id="hero-title" class="hero__title">Atlantean Treasures</h1>
      <p class="hero__subtitle">Dive into an ocean of treasures</p>
      <a href="#" class="btn btn--primary btn--lg" aria-label="Start playing Atlantean Treasures now">Play Now</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    color: var(--white);
    padding: var(--spacing-lg);
    z-index: 1;
    position: relative;
  }

  &__logo {
    max-width: 400px;
    margin-bottom: var(--spacing-md);

    @media (max-width: var(--breakpoint-mobile)) {
      max-width: 220px;
    }
  }

  &__title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: var(--spacing-md);
    background: var(--gradient-gold-alt);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: var(--breakpoint-mobile)) {
      font-size: 2rem;
    }
  }

  &__subtitle {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-lg);
    max-width: 600px;

    @media (max-width: var(--breakpoint-mobile)) {
      font-size: 1rem;
      max-width: 90%;
    }
  }

  a.btn {
    font-size: 1rem;
    padding: var(--spacing-sm) var(--spacing-lg);

    @media (max-width: var(--breakpoint-small)) {
      font-size: 0.9rem;
      padding: 0.6rem 1.2rem;
    }
  }
}
</style>