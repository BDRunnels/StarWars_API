import { useParams } from "react-router-dom";

import Vehicles from "./vehicles";
import Species from "./species";
import People from "./people";
import Starships from "./starships";
import Planets from "./planets";

const Category = (props) => {
    const { category } = useParams();
    const { peopleData, vehicleData, speciesData, starshipData, planetsData } = props;

    switch(category) {
        case "people":
            return <People peopleData={peopleData} />
        case "vehicles":
            return <Vehicles vehicleData={vehicleData} />
        case "species":
            return <Species speciesData={speciesData} />
        case "starships":
            return <Starships starshipData={starshipData} />
        case "planets":
            return <Planets planetsData={planetsData} />
        default:
            return <h1 className="text-center d-flex justify-content-center"> 404: Page Not Found </h1>
    };
};

export default Category;