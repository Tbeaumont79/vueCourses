<script setup lang="ts">
import { onMounted } from 'vue'
import { useRecipes } from '@/composables/useRecipes'

const { recipes, loading, error, fetchRecipes } = useRecipes()

onMounted(() => {
  fetchRecipes()
})
</script>
<template>
  <main class="flex flex-col items-center pt-4">
    <h1 class="text-white text-2xl mb-4">This is the main page with dummy data</h1>

    <div v-if="loading" class="text-white">Loading...</div>
    <div v-if="error" class="text-red-500">{{ error.message }}</div>

    <ul class="flex flex-wrap gap-x-4 p-4 justify-center w-full" v-if="recipes.length">
      <li class="pt-10" v-for="recipe in recipes" :key="recipe.id">
        <div
          class="w-full overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10"
        >
          <div class="px-4 py-5 sm:p-6 flex flex-col gap-y-4">
            <img :src="recipe.image" class="w-40 h-40 mx-auto" alt="" />
            <h2 class="text-lg text-white font-bold">{{ recipe.name }}</h2>
            <p class="text-white">Calories: {{ recipe.caloriesPerServing }}</p>
            <p class="text-white">Difficulty: {{ recipe.difficulty }}</p>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>
