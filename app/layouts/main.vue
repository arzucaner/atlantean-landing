<template>
  <div class="grid grid--row">
    <!-- Skip to main content link for accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <SharedHeader />
    <main id="main-content" class="main-content">
      <slot />
    </main>
    <SharedFooter />
  </div>
</template>

<style scoped lang="scss">
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-accent);
  color: var(--secondary-text);
  padding: var(--spacing-sm) var(--spacing-md);
  text-decoration: none;
  border-radius: var(--radius-sm);
  z-index: 1000;
  font-weight: bold;
  
  &:focus {
    top: 6px;
  }
}

.main-content {
  min-height: 100vh;
}
</style>
