<template>
  <header class="header" role="banner">
    <div class="container">    
      <div class="logo">
        <svg class="logo__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2l2 2-2 2-2-2 2-2zm0 5v9h2v6h-4v-6h2V7zm6-3l2 2-2 2-2-2 2-2zm0 5v2h4v2h-4v2l-3-3 3-3zm-12-5l2 2-2 2-2-2 2-2zm0 5v2H2v2h4v2l3-3-3-3z"/>
        </svg>
        <span class="logo__text">King Neptune</span>
      </div>
    
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <a href="/" class="btn btn--secondary btn--md" aria-label="Sign In">Sign In</a>
        <a href="/" class="btn btn--primary btn--md" aria-label="Sign Up">Sign Up</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');

.header {
  background-color: var(--dark-bg);
  color: var(--primary-text);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: var(--shadow-light);

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-md);
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 160px;
  animation: rise var(--transition-slow) ease-out forwards;

  &__icon {
    width: 28px;
    height: 28px;
    color: gold;
  }

  &__text {
    font-family: 'Cinzel Decorative', serif;
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--gradient-logo);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: var(--shadow-glow);
  }
}

.nav {
  display: flex;
  gap: var(--spacing-md);

  @media (max-width: var(--breakpoint-tiny)) {
    flex-direction: column;
    width: 100%;

    a {
      width: 100%;
      text-align: center;
    }
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
