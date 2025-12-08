<script lang="ts">
import { defineProps } from 'vue'
const { image, name, caloriesPerServing, difficulty } = defineProps<{
  image: string
  name: string
  caloriesPerServing: number
  difficulty: string
}>()
</script>
<template>
  <div
    class="w-full overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10"
  >
    <div class="px-4 py-5 sm:p-6 flex flex-col gap-y-4">
      <img :src="image" class="w-40 h-40 mx-auto" alt="" />
      <h2 class="text-lg text-white font-bold">{{ name }}</h2>
      <p class="text-white">Calories: {{ caloriesPerServing }}</p>
      <p class="text-white">Difficulty: {{ difficulty }}</p>
    </div>
  </div>
</template>
