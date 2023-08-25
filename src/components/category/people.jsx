import { Fragment } from "react";

import GoToTop from "../gototop/goToTop";
import './category.styles.css'

const People = ({peopleData}) => {

    return (
        <Fragment>
            <br/>
            <h1 className="text-center"> PEOPLE</h1>
            <div className="container shadow mt-5">
                <div className="row justify-content-center p-1">
                {
                    peopleData ? peopleData.map((person) => {
                        return (
                            <div key={person.name} className="d-flex flex-wrap align-items-center align-content-center justify-content-between col-lg-4 col-md-6 col-sm-6 m-1">
                                <div  className="text-center">
                                    <p> <b><u>{person.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    
                                        <div> Gender: {person.gender === "n/a" || person.gender === "none" ? "Droid" : person.gender}</div>
                                        <div> Height: {person.height === "none" || person.height === "unknown" ? "Unknown" : Math.floor((person.height * .393701) / 12)} ft tall</div>
                                        <div> Weight: {person.mass === "unknown" ? "Unknown" : (person.mass * 2.2).toFixed(1)} lbs</div>
                                   
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

export default People;