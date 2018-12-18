import React from 'react';
import { recipe } from '../tempDetails';



class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: recipe,
            url: `https://www.food2fork.com/api/get?key=03c9de31969334077a097330d114675d&rId=${this.props.id}`
        }
    }


    render() {
        console.log(this.state.recipe);
        
        return(
            <h1>hello!</h1>
        )
    }
}


export default Details;