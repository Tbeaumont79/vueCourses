<script setup lang="ts">
import { onMounted } from 'vue'
import { useRecipes } from '@/composables/useRecipes'
import recipeCard from '@/components/Recipes/recipe-card.vue'

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
        <recipe-card :recipe="recipe" />
      </li>
    </ul>
  </main>
</template>
