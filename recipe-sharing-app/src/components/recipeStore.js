import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  ingredient: '',
  prepTime: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  setIngredient: (ingredient) => set({ ingredient }),
  setPrepTime: (prepTime) => set({ prepTime }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
      recipe.ingredients.toLowerCase().includes(state.ingredient.toLowerCase()) &&
      recipe.preparationTime.toString().includes(state.prepTime)
    )
  })),
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  initializeRecipes: (recipes) => set({ recipes, filteredRecipes: recipes })
}));

export { useRecipeStore };
