<template>
  <footer class="py-6 bg-[var(--davys)] text-center text-sm text-gray-200 mt-12">
    <div class="space-x-2">
      <span>© 2025 Code 82 Ltd · All rights reserved</span>
      <span>·</span>
      <RouterLink to="/lexis-one-terms" class="underline hover:no-underline">LexisOne Terms</RouterLink>
      <span>·</span>
      <RouterLink to="/lexis-one-privacy" class="underline hover:no-underline">LexisOne Privacy</RouterLink>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
