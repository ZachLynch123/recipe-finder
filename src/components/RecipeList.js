import React from 'react';


class RecipeList extends React.Component {
// destructure props

    render() {
        const { recipes } = this.props 
        return(
            <React.Fragment>
                <h1>hello!</h1>
            </React.Fragment>
        )
    }
}

export default RecipeList;