import React from 'react';
import Recipe from './Recipe';


class RecipeList extends React.Component {
// destructure props

    render() {
        const { recipes } = this.props 
        return(
            <React.Fragment>
                <div className="container my-5">
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">Recipe List</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            recipes.map((recipe, index) => {
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
        )
    }
}

export default RecipeList;