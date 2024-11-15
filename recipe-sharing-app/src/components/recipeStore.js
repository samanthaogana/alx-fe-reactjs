import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.preparationTime.toString().includes(state.searchTerm)
    )
  })),
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.preparationTime.toString().includes(state.searchTerm)
    )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id)
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ).filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.preparationTime.toString().includes(state.searchTerm)
    )
  })),
  initializeRecipes: (recipes) => set({ recipes, filteredRecipes: recipes })
}));

export { useRecipeStore };

