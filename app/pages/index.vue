<script lang="ts" setup>
import HeroSection from '~/components/shared/HeroSection.vue'
import JackpotBanner from '~/components/shared/JackpotBanner.vue'
import OfferDetailsSection from '~/components/shared/OfferDetailsSection.vue'
import CtaSection from '~/components/shared/CtaSection.vue'
 import GameplayVideo from '~/components/shared/GameplayVideo.vue'
import GameList from '~/components/shared/GameList.vue'


  definePageMeta({
    layout: 'main'
  })
</script>

<template>
  <div>
    <HeroSection />
    <JackpotBanner />
    <OfferDetailsSection />    
    <CtaSection />
    <GameplayVideo />
    <GameList />
  </div>
</template>

<style lang="scss" scoped>

</style>