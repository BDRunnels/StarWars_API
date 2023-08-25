import { Fragment } from "react";

import GoToTop from "../gototop/goToTop";
import './category.styles.css'

const Species = ({speciesData}) => {
    console.log(speciesData)
    return (
        <Fragment>
            <br/>
            <h1 className="text-center"> SPECIES </h1>
            <div className="container shadow mt-5">
                <div className="row justify-content-center p-1">
                {
                    speciesData ? speciesData.map((type) => {
                        return (
                            <div key={type.name} className="d-flex flex-wrap align-items-center align-content-center justify-content-between col-lg-4 col-md-6 col-sm-6 m-1">
                                <div className="text-center">
                                    <p> <b><u>{type.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    
                                        <div> Type: {type.classification}</div>
                                        <div> Language: {type.language}</div>
                                        <div> Avg Height: {type.average_height === "none" || type.average_height === "unknown" || type.average_height === "n/a" ? "Unknown" : Math.floor((type.average_height * .393701) / 12)} ft tall</div>
                                        <div> Avg Lifespan: {type.average_lifespan}</div>
                                   
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

export default Species;