<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-slate-800 flex justify-between p-4">
    <h1 class="text-white text-2xl">Kata-1</h1>
    <nav class="flex gap-x-4">
      <RouterLink class="text-white" to="/">Home</RouterLink>
      <RouterLink class="text-white" to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
