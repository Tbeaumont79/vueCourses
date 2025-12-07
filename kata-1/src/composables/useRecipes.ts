import axios from 'axios'
import { ref } from 'vue'

interface Recipes {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  userId: number
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
}

export function useRecipes() {
  const recipes = ref<Recipes[]>([])
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const fetchRecipes = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL)
      if (!res || !res.data) {
        throw new Error('No data fetched from the API')
      }
      recipes.value = res.data.recipes
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }
  return { recipes, error, loading, fetchRecipes }
}
