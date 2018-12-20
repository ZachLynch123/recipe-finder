import React from 'react';



class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: '',
            url: `https://www.food2fork.com/api/get?key=03c9de31969334077a097330d114675d&rId=${this.props.id}`,
            isLoaded: false
        }
    }


    // Async request for details api call
    async componentDidMount() {
        try {
            const data = await fetch(this.state.url);
            const josnData = await data.json()
            this.setState((state, props) => {
                return {recipe: josnData.recipe, isLoaded: true}
            }, () => {});
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        // destructuring state and props
        const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe; 
        const { handleIndex } = this.props; 
        if (this.state.isLoaded){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-warning mb-5 text-capitalize"
                            onClick={() => handleIndex(1)}>
                                Back to list</button>
                                <img src={image_url} className="d-block w-100" alt="recipe" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-capitalize text-slanted">
                                Provided by {publisher}
                            </h6>
                            <a href={publisher_url} target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-2 text-capitalize">Publisher's page</a>
                            <a href={source_url} target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-success mt-2 mx-3 text-capitalize">Source's page</a>
                            {/* Ingredients list */}
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">Ingredients</h2>
                                {
                                    ingredients.map((ingredient, index) => {
                                        return(
                                            <li key={index} className="list-group-item text-slanted">
                                                {ingredient}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )}
        return (
            <div>Loading..</div>
        )
    }
}


export default Details;