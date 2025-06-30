<template>
  <section class="cta" role="region" aria-labelledby="cta-title">
    <div class="container">
      <h2 id="cta-title" class="cta__title">Ready to Play?</h2>
      <p class="cta__text">
        Sign up now and claim your 200 Free Spins on Atlantean Treasures: Mega Moolah!
      </p>
      <a href="#" class="cta__button" aria-label="Sign up and claim 200 free spins now">Sign Up & Claim Now</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cta {
  background-color: var(--primary-accent);
  text-align: center;
  padding: var(--spacing-2xl) var(--spacing-md);

  &__title {
    font-size: 2rem;
    margin-bottom: var(--spacing-md);
    font-weight: bold;
    color: var(--error-color);
  }

  &__text {
    font-size: 1.125rem;
    margin-bottom: var(--spacing-xl);
    max-width: 800px;
    margin-inline: auto;
    color: var(--black);
  }

  &__button {
    display: inline-block;
    padding: var(--spacing-sm) var(--spacing-xl);
    border: 2px solid var(--error-color);
    border-radius: var(--radius-lg);
    font-weight: bold;
    background-color: transparent;
    color: var(--black);
    transition: all var(--transition-normal) ease;
    text-decoration: none;

    &:hover {
      background: var(--white);
      color: var(--black);
      border-color: transparent;
    }

    &:focus {
      outline: 2px solid var(--error-color);
      outline-offset: 2px;
    }
  }

  @media (max-width: var(--breakpoint-small)) {
    &__title {
      font-size: 1.25rem;
      line-height: 1.4;
    }

    &__text {
      font-size: 1rem;
      padding: 0 var(--spacing-md);
    }

    &__button {
      padding: var(--spacing-sm) var(--spacing-md);
      font-size: 0.9rem;
      white-space: nowrap;
    }
  }
}
</style>
