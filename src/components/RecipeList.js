import React from 'react';
import Recipe from './Recipe';

// convert to stateless component
const RecipeList = props => {
    return(
        <React.Fragment>
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
                        props.recipes.map((recipe, index) => {
                            return(
                                <Recipe key={recipe.recipe_id}
                                recipe={recipe}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )}


export default RecipeList;