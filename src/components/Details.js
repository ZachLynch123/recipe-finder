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
        const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe;        
        return(
            <React.Fragment>
                <div className="container">
                <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                <button></button>
                </div>
                </div>
                </div>

            </React.Fragment>
        )
    }
}


export default Details;