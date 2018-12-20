import React from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

const RecipeList = props => {
    // destructure props
    const { recipes, handleDetailId, handleSearch, handleSubmit, value} = props
    
    return(
        <React.Fragment>
            <RecipeSearch value={value} handleSearch={handleSearch} handleSubmit={handleSubmit} />
            <div className="container my-5">
            {/* Title */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                        <h1 className="text-slanted">Recipe List</h1>
                    </div>
            {/* End Title */}
                </div>
                <div className="row">
                    {
                        recipes.map(recipe => {
                            return(
                                <Recipe key={recipe.recipe_id}
                                recipe={recipe}
                                handleDetailId={handleDetailId}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )}


export default RecipeList;