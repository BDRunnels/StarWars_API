import { MediaBluetoothOff } from "@mui/icons-material";
import { Fragment } from "react";

const People = ({peopleData}) => {

    return (
        <Fragment>
            <ul>
            {
                peopleData ? peopleData.map((person) => {
                    return (
                        <span key={person.name}>
                            <li> {person.name}</li>
                                <ul>
                                    <li> {person.gender === "n/a" || person.gender === "none" ? "Droid" : person.gender}</li>
                                    <li> {person.height === "none" || person.height === "unknown" ? "Unknown" : Math.floor((person.height * .393701) / 12)} ft tall</li>
                                    <li> {person.mass === "unknown" ? "Unknown" : (person.mass * 2.2).toFixed(1)} lbs</li>
                                </ul>
                        </span>    
                    )
                }) : 'No Data'
            }
            </ul>
        </Fragment>
    );
};

export default People;