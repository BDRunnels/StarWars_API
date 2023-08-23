import { Fragment } from "react";

import './category.styles.css'

const Starships = ({starshipData}) => {
    
    return (
        <Fragment>
            <h1 className="text-center"> STARSHIPS </h1>
            <div className="container shadow">
                <div className="row justify-content-center p-5">
                {
                    starshipData ? starshipData.map((ship, idx) => {
                        return (
                            <div key={idx} className="d-flex flex-wrap align-items-center align-content-center justify-content-between">
                                <div  className="text-center">
                                    <p> <b><u>{ship.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    
                                        <div> Model: {ship.model}</div>
                                        <div> Cost: ${ship.cost_in_credits}</div>
                                        <div> Crew: {ship.crew}</div>
                                        <div> Length: {(ship.length * 3.28084).toFixed(2)} feet</div>
                                   
                                </div>
                            </div>    
                        )
                    }) : 'No Data'
                }
                </div>
            </div>
        </Fragment>
    );
};

export default Starships;