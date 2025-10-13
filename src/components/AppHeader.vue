<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
      <RouterLink to="/" aria-label="Code 82 Ltd Homepage">
        <img src="/assets/code-82-logo-d.png" alt="Code 82 Ltd logo" class="max-h-12 w-auto object-contain">
      </RouterLink>
      <nav class="text-sm text-[var(--paynes)] flex items-center gap-4 sm:gap-6">
        <RouterLink to="/lexone" class="hover:underline">LexOne</RouterLink>
        <RouterLink to="/lexis-one-terms" class="hover:underline">Terms</RouterLink>
        <RouterLink to="/lexis-one-privacy" class="hover:underline">Privacy</RouterLink>
        <a href="mailto:info@code-82.com" class="hover:underline">info@code-82.com</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
