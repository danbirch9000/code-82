<template>
  <div class="bg-white text-base text-primary min-h-screen">
    <AppHeader />
    <main class="pt-24">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>
