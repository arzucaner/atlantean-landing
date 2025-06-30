<script lang="ts" setup>
const currentYear: Ref<number> = ref(new Date().getFullYear());
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__container">
      <p>&copy; {{ currentYear }} King Neptune Casino. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: var(--dark-bg);
  color: var(--primary-text);
  padding: var(--spacing-md) 0;
  text-align: center;

  &__container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  p {
    font-size: 0.75rem;
    margin: 0;
    line-height: 1.4;
    word-break: break-word;
  }
}
</style>

