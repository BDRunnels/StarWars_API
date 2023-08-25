import { Fragment } from "react";

import GoToTop from "../gototop/goToTop";
import './category.styles.css'

const Vehicles = ({vehicleData}) => {
    console.log(vehicleData)
    return (
        <Fragment>
            <br/>
            <h1 className="text-center"> VEHICLES </h1>
            <div className="container shadow mt-5">
                <div className="row justify-content-center p-5">
                {
                    vehicleData ? vehicleData.map((vehicle, idx) => {
                        return (
                            <div key={idx} className="d-flex flex-wrap align-items-center align-content-center justify-content-between">
                                <div  className="text-center">
                                    <p> <b><u>{vehicle.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    
                                        <div> Class: {vehicle.vehicle_class}</div>
                                        <div> Max Speed: {vehicle.max_atmosphering_speed} mph</div>
                                        <div> Crew: {vehicle.crew}</div>
                                        <div> Length: {(vehicle.length * 3.28084).toFixed(2)} feet</div>
                                   
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

export default Vehicles;