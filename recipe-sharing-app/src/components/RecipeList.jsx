import DeleteRecipeButton from './DeleteRecipeButton';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const filterRecipes = useRecipeStore(state.filterRecipes);

    useEffect(() => {
      filterRecipes();
    }, [searchTerm, filterRecipes]);

    return (
      <div>
        {filteredRecipes.length > 0 ? (
           filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
            <Link to={`/recipes/${recipe.id}`} state={{ recipeId: recipe.id }}>{recipe.title}</Link>
              </h3>
            <p>{recipe.description}</p>
            <Link to={`/edit/${recipe.id}`} state={{ recipeId: recipe.id }}>Edit</Link>
            <DeleteRecipeButton id={recipe.id} />
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
      </div>
    );
  };

  export default RecipeList;