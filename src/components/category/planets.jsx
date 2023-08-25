import { Fragment } from "react";

import GoToTop from "../gototop/goToTop";
import './category.styles.css'

const Planets = ({planetsData}) => {
    
    return (
        <Fragment>
            <br/>
            <h1 className="text-center"> Planets </h1>
            <div className="container shadow mt-5">
                <div className="row justify-content-center p-1">
                {
                    planetsData ? planetsData.map((planet) => {
                        return (
                            <div key={planet.name} className="d-flex flex-wrap align-items-center align-content-center justify-content-between col-lg-4 col-md-6 col-sm-6 m-1">
                                <div className="text-center">
                                    <p> <b><u>{planet.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    
                                        <div> Population: {planet.population}</div>
                                        <div> Climate: {planet.climate}</div>
                                        <div> Terrain: {planet.terrain.includes(',') ? planet.terrain.split(',')[0].trim() : planet.terrain}</div>
                                        <div> Diameter: {planet.diameter} meters</div>
                                   
                                </div>
                            </div>    
                        )
                    }) : 'No Data'
                }
                </div>
            </div>
            <GoToTop />
        </Fragment>
    );
};

export default Planets;