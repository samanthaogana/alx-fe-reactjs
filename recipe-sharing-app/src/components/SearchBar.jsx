import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const [ingredient, setIngredient] = useState('');
  const [prepTime, setPrepTime] = useState('');  
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearch = (event) => {
    const term= event.target.value;
    setSearchTerm(term);
    filterRecipes();
  };

  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
    filterRecipes();
  };

  const handlePrepTimeChange = (event) => {
    setPrepTime(event.target.value);
    filterRecipes();
  };

  return (
    <div>
        <input 
        type="text" 
        placeholder="Search recipes..." 
        onChange={handleSearch} 
        /> 
        
        <input 
        type="text" 
        placeholder="Filter by ingredient..." 
        value={ingredient} 
        onChange={handleIngredientChange} 
        /> 
        
        <input 
        type="number" 
        placeholder="Filter by preparation time..." 
        value={prepTime} 
        onChange={handlePrepTimeChange} 
        />

       <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
       />
    </div>
  );
};

export default SearchBar;